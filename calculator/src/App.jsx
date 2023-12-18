import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from "./Calculator.module.css";
import Input from "./Components/Input";
import Button from "./Components/Buttons";
function App() {
  let [calVal,setCalVal]=useState("");
  let onButtonClick=(clickValue)=>{
  if(clickValue=="C"){
    setCalVal("");
}else if(clickValue=="="){
  const result=eval(calVal);
  setCalVal(result);

}else {
  const newDisplayValue=calVal + clickValue;
  setCalVal(newDisplayValue);
}
 };
  return (
    <>
    <center><h1>Calculator</h1></center> 
    <center> <div className={styles.container}><Input value={calVal}/><Button value={onButtonClick}/></div></center>
    </>
  )
}

export default App
