<?php

use Carbon\Carbon;

function to_gregorian($date)
{
    return \Morilog\Jalali\Jalalian::fromFormat('Y-m-d', Carbon::parse($date)->format('Y-m-d'))->toCarbon()->format('Y-m-d');
}

function to_jalali($date)
{
    return Morilog\Jalali\CalendarUtils::strftime('Y-m-d', strtotime($date));
}
