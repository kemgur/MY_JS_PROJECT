import React from "react";
import ReactDOM from "react-dom";
//import External files to be able to use in here
import Heading from "./components/Heading"


ReactDOM.render(
    <div>
    {/* Calling the Heading component */}
        <Heading />
        <ul>
            <li>Go Shopping</li>
            <li>Do Exercise</li>
            <li>Reserve Hotel</li>
        </ul>
    </div>
,
document.getElementById("root"));