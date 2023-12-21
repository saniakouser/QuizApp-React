import React, { useEffect } from 'react'
import "./Quiz.css"
import aiQuestions from './Question';
import { useState } from 'react'
import useSound from "use-sound";
import correct from './assets/correct.mp3'
import play from './assets/play.mp3'
import wait from './assets/wait.mp3'
import wrong from './assets/wrong.mp3'



export default function Quiz({setquestionnumber,SetTimeOut,questionnumber}) {
    const[question,setquestion]=useState(1);
    const[selectedanswer,setselectedanswer]=useState(1)
    const[classname,setClassname]=useState("ans")
  useEffect(()=>{setquestion(aiQuestions[(questionnumber-1)])},[aiQuestions,questionnumber]);
  const delay=(duration ,callback)=>{
    setTimeout(() => {
        callback();
      },duration);}
      const[letsplay]=useSound(play);
   const[correctplay]=useSound(correct);
   const[waitplay]=useSound(wait);
   const[wrongplay]=useSound(wrong);
   
  const handleclick=(item)=>{
  setselectedanswer(item)
  setClassname("ans active");
  delay(3000,()=>{ setClassname(item.correct?"ans correct":"ans wrong");});
    delay(6000,()=>{
      if(item.correct)  {
        correctplay();
        delay(2000,()=>{setquestionnumber((prev)=>prev+1);})
      }
      else{
        wrongplay();
        delay(2000,()=>{ SetTimeOut(true)})
       
      }
    })
  }
  
  return (
    <div className='quiz'>
      {question && question.options ? (
        <>
          <div className="question">{question.question}</div>
          <div className="answer">
            {question.options.map((item, index) => (
              <div key={index} className={selectedanswer===item?classname:"ans"} onClick={()=>handleclick(item)}>{item.text}</div>
            ))}
          </div>
        </>
      ) : (
        <div className="question">Loading or no questions available.</div>
      )}
    </div>
  );
      }