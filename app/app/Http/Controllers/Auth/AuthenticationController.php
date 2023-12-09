<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class AuthenticationController extends Controller
{
    protected function login(Request $request)
    {
        try {
            $validateUser = Validator::make(
                $request->all(),
                [
                    'email' => 'required|email',
                    'password' => 'required'
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if (Auth::attempt($request->only('email', 'password'))) {
                $user = Auth::user();

                $response = [
                    'status' => true,
                    'message' => 'User Logged In Successfully',
                    'api_token' => $user->createToken("API TOKEN")->plainTextToken,
                    'current_user' => $user,
                    'permissions'  => $user->getAllPermissions()->pluck('name'),
                    'role'=> $user->roles()->pluck('name')[0]
                ];

                return response($response, 201);
            }

            return response()->json([
                'status' => false,
                'message' => 'ایمل و یا رمز عبور شما درست نمی باشد.',
            ], 401);
        } catch (\Throwable $th) {
            $response = [
                'status' => false,
                'message' => $th->getMessage()
            ];

            return response($response, 500);
        }
    }

    protected function register(Request $request)
    {
        $fields = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'first_name' => $fields['first_name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('API TOKEN')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    protected function logout(Request $request)
    {
        $accessToken = $request->bearerToken();
        // Get access token from database
        $token = PersonalAccessToken::findToken($accessToken);

        // Revoke token
        $token->delete();

        return response('token removed', 201);
    }

    public function user()
    {
        $user = Auth::user();
        return json_encode([
            'id'           => $user->id,
            'name'         => $user->name,
            'permissions'  => $user->getAllPermissions()->pluck('name'),
            'role'         => $user->roles()->pluck('name')[0]
        ]);
    }
}
