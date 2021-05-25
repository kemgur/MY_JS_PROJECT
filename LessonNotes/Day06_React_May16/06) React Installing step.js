
1) npm install react-scripts start
2) npm install
3) npm start

// Add react library to this file
import React from 'react';
// Add react-dom from ReactDOM
import ReactDOM from 'react-dom';
// RENDER <h1> HELLO WORKD </h1> in UI using React
// ReactDOM.render("WHAT TO SHOW. HTML(JSX) CODES.","WHERE TO SHOW.WE WILL SHOW IT IN THE INDEX.HTML");
ReactDOM.render(
    // Render How Are You? in a paragraph
    //<p> How Are You ? < /p>
    // NOTE: When we render more than one element, then react will complain
    //Because we can render only one single element using ReactDOM.render function
    //So use div tag to render all other elements
    //Display "This is my first react project" on h4 element 
    // TASK:
    //It should display a h1 heading.
    //It should display an unordered list (bullet points). ul then li
    //It should contain 3 list elements.
    <div>
    <h1>My To Do List</h1>
    <ul>
        <li>Go Shopping</li>
        <li>Do Exercise</li>
        <li>Reserve Hotel</li>
    </ul>
    </div>
,
    document.getElementById("root"));
//1. npm install react-scripts start  : THIS COMMENT IS USED TO ADD THE DEPENDENCIESE IN THE REACT APP
//WHEN EVER WE START A NEW PROJECT, WE DO THIS ONLY ONCE TO ADD REACT LIBRARIES
//OPEN TERMINAL TO RUN THIS 
//2. npm install : Double check the intallation
//3. npm start : OPENS THE REACT PAGE
//npm => node package manager
//REINSTALLATION:
//control + c  -> get out of the terminal
// DO THIS IS YOU ARE HAVING ERROR
// 1. Delete "node_modules"
// 2. Delete "package-lock.json"
// 3. npm install react-scripts start
// 4. npm install
// 5. npm start : OPENS THE REACT PAGE