
import './App.css';
import money from './money';
import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import Timer from './Timer';


function App() {
  const[questionnumber,setquestionnumber]=useState(1)
  const[timer,SetTimeOut]=useState(false)
  const[earned,Setearned]=useState("$0")
   useEffect(()=>{
    questionnumber>1 &&
    Setearned(money.find((m)=>m.id===questionnumber-1).amount)
   },[money,questionnumber]);
    const handleClick = () => {
    window.location.reload();
  };
  
   return(
    <div className="App">
      {timer? <div className="earn">you earned {earned}
      
        <div className="restart">
          <button onClick={handleClick}>Restart</button>
        </div>
      </div>:
      
   (
    <>
   <div className="main">
   <i class="fas fa-money money-icon"></i>

    <div className="top"><div className="timer"><Timer SetTimeOut={SetTimeOut}  questionnumber={questionnumber}/></div></div>
   <div className="bottom"><Quiz setquestionnumber={setquestionnumber} SetTimeOut={SetTimeOut}questionnumber={questionnumber} /></div>
   </div>
  <div className="pyramid">
    <ul className='moneylist'>
      {money.map((item) => (
        <li className={questionnumber===item.id ? "moneylistitem active":"moneylistitem"} key={item.id}>
          <span className='moneylistnumber'>{item.id}</span>
          <span className='moneylistamount'>{item.amount}</span>
        </li>
      ))}
    </ul>
  </div>
  </>)}
</div>

   ) 
}

export default App;

