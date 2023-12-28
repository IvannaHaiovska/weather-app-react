import React from "react";

export default function FormatDate(props){
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
   let day = days[props.date.getDay()];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
  let month = months[props.date.getMonth()];
    let dayNumber = props.date.getDate();
    if (dayNumber === 1) {
        dayNumber = 1 + "st";
    } else if (dayNumber === 2) {
        dayNumber = 2 + "nd";
    } else if (dayNumber === 3) {
        dayNumber = 2 + "rd";
    } else {
        dayNumber = dayNumber + "th";
    }

    let hours = props.date.getHours()
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
 return(
        <div> {day}, {dayNumber} {month} {props.date.getFullYear()}, {hours}:{minutes}</div>
    )
 }