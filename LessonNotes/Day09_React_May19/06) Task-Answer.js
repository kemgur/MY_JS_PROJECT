

//5. Create a Note.jsx component to show a <div> element with a <h1> for a title and a <p> for the content.
//REMEMBER WE CAN USE html ELEMENTS FOR STYLING. SO We can add note class to div element 
import React from 'react';
function Note(){
    return <div className="note">
        <h1 >This is the TITLE</h1>
        <p >This is the Content</p>
    </div>
}
export default Note;

///==========================

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

function App(){
    return <div>
    <Header/>
    <Note/>
    <Footer/>
    </div>
}

export default App;