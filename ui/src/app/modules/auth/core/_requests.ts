import axios from 'axios'
import { AuthModel, UserModel } from './_models'
var CryptoJS = require("crypto-js");

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}api/verify_token`
export const LOGIN_URL = `${API_URL}api/login`
export const REGISTER_URL = `${API_URL}api/register`
export const REQUEST_PASSWORD_URL = `${API_URL}api/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}

export function Encrypt(pureText: any) {
  const privateKey: any = process.env.REACT_APP_SECRET_KEY
  var ciphertext = encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(pureText), privateKey).toString()
  )
  return ciphertext
}

export function Decrypt(encryptedText: any) {
  const privateKey: any = process.env.REACT_APP_SECRET_KEY
  var bytes = CryptoJS.AES.decrypt(decodeURIComponent(encryptedText), privateKey)
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  return decryptedData
}