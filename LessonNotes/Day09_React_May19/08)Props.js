import React from "react";
import ReactDOM from "react-dom";
​
function Card(props){
   console.log(props);
  // console.log(props.tel)
  return <div>
    <h2 className="my-style">{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p className="tel-style">{props.tel}</p>
    <p>{props.email}</p>
  </div>
}
//1.  create props inside Card component: name, img, tel, email
{/* <Card 
name= "Jim Carrey"
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU" 
tel="+123 456 789"
email="j@carrey.com"
/> */}
​
//2. Access the prop values using props in the functional component
//function Card(props){
​
//3. display the prop values inside the Card component usign {} notation
​
ReactDOM.render(
  <div>
    <h1 className="my-style">My Contacts</h1>
​
    <Card 
    name= "Jim Carrey"
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU" 
    tel="+123 456 789"
    email="j@carrey.com"/>
​
    <Card 
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"/>
​
    <Card 
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"/>
  </div>, 
  document.getElementById("root")
);