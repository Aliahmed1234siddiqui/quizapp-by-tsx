import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { read } from 'fs';

function App() {

let arr = [
  {
    question:"Who is the father of Computer?",
    option:["Allen Turing","Charles Babbage"," Simur Cray","Augusta Adaming"] ,
    currectOtion:"Charles Babbage",

  },
  {
    question:"WWW stands for___________?",
    option:[" World Whole Web","Wide World Web","Web World Wide","World Wide Web"] ,
    currectOtion:"World Wide Web",

  },
  {
    question:"A collection of system programs that controls and co-ordinates the overall operations of a computer system is called____________?",
    option:["System software","Operating system","Utility program","Device driver"] ,
    currectOtion:"Operating system",

  },
  {
    question:"Which of the following are components of Central Processing Unit (CPU) ?",
    option:["Arithmetic logic unit, Mouse","Arithmetic logic unit, Integrated Circuits","Arithmetic logic unit, Control unit","Control Unit, Monitor"] ,
    currectOtion:"Arithmetic logic unit, Control unit",

  },  {
    question:"ALU is____________?",
    option:[" Arithmetic Logic Unit","Array Logic Unit","Application Logic Unit","None of above"] ,
    currectOtion:" Arithmetic Logic Unit",

  },
]
let index = 0;
let score = 0;
let a = (index:number)=>{
  return(
    <>
     <h3>Q{index+1}/{arr.length} </h3>
    <p>{arr[index].question}</p>
    
   
  <div className="row w-100 p-3  ">
    {arr[index].option.map((y,j)=>{
  return(
  <div onClick={()=>butn(y)}  className="btn btn-dark m-2  col-md-5 col-sm-12 ">{y}</div>
  
  )
    })}
    </div> 
    
    </>
  )
  
  }
  

console.log(index)

let butn= (y:any)=>{
 console.log(y);
  if(y==arr[index].currectOtion){
    score++;
  }
console.log(score);
 
}

let next = ()=>{
  index++;
  a(index);
}


  return (
    <>
      <div className="main col-md-6 col-sm-12 ">
  <h1 className='bg-dark text-light w-100'>QUIZ APP</h1>
 
  {a(0)}
 




<div onClick={next} className="btn btn-secondary">NEXT</div>


 
  

  </div>
  </>
    
  );
}

export default App;
