import React, { useEffect, useState } from 'react'



export default function Timer({SetTimeOut,questionnumber}) {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if(time===0){
        return SetTimeOut(true);
    }
    const interval = setInterval(() => {
      
      setTime((prev) => prev - 1);
    }, 1000);

    
    return () => clearInterval(interval);
  }, [SetTimeOut,time]); 
  useEffect(()=>{
    setTime(30)
  },[questionnumber])
  return time;
}

