import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM=18.
//or "Good evening" if between 6PM and midnight-.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
// HINT: Create Date() object
// Get the hour as a JS object and store as currentTime
// Create an object called greeting
// Create a customStyle object and initialize the color
// Use if else statement to assign values for greeting and costomStyle color based on currentTime
// Render the h1 and use the customStyle and greeting where needed.
//Getting the current time
// const currentDate=new Date(2021,1,1,19);
const currentDate=new Date();
const currentHour=currentDate.getHours();
console.log(currentHour);
let greeting;
let myStyle={color: ""};
if(currentHour<12){
    greeting="Good Morning";
    myStyle.color="red";
}else if(currentHour<18){
    greeting="Good Afternoon";
    myStyle.color="green";
}else{
    greeting="Good Night";
    myStyle.color="blue";
}
ReactDOM.render(
    <div>
      <h1 style={myStyle}>{greeting}</h1>
    </div>,  
    document.getElementById("root")
);