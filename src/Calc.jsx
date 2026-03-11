import { useState } from "react";
import Button from "./Components/Button";
import Symbols from "./data";

export default function Calculator() {

  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [previous, setPrevious] = useState("");

  
  function getValue(num){

    if(value === previous){
      setValue(num.toString());
    }
    else if(value === "0" && num !== "."){
      setValue(num.toString());
    }
    else{
      setValue(prev => prev + num);
    }

  }

  
  function chooseOp(op){

    if(previous !== "" && operator !== "" && value !== ""){
      compute();
    }
    else{
      setPrevious(value);
    }

    setOperator(op);
  }

  
  function compute(){

    if(previous === "" || operator === "") return;

    const prev = Number(previous);
    const current = Number(value);

    let result = 0;

    switch(operator){

      case "+":
        result = prev + current;
        break;

      case "-":
        result = prev - current;
        break;

      case "X":
        result = prev * current;
        break;

      case "÷":
        result = prev / current;
        break;

      case "%":
        result = prev % current;
        break;

      default:
        return;
    }
    if(isNaN(result)) result="Math Error"

    setValue(result.toString());
    setPrevious(result.toString());
    setOperator("");
  }

  function clear(){
    setValue("0");
    setPrevious("");
    setOperator("");
  }

  function toggleSign(){
    setValue((-(+value)).toString());
  }

  function handleClick(symbol){

    if(!isNaN(symbol)){
      getValue(symbol);
    }

    else if(symbol === "."){
      getValue(".");
    }

    else if(symbol === "AC"){
      clear();
    }

    else if(symbol === "+/-"){
      toggleSign();
    }

    else if(symbol === "="){
      compute();
    }

    else{
      chooseOp(symbol);
    }

  }

  const Calc = Symbols.map((symbol,index)=>{

    let extraStyle="";

    if(symbol==="+"||symbol==="-"||symbol==="x"||symbol==="÷"||symbol==="="){
      extraStyle="bg-[#F38636] text-white";
    }

    if(symbol==="0"){
      extraStyle+=" col-span-2";
    }

    return(
      <Button
        key={index}
        value={symbol}
        handler={()=>handleClick(symbol)}
        extra={extraStyle}
      />
    )
  })

  return (
    <div className="h-136 flex items-center justify-center bg-[#7A7B88] w-100">

      <div className="w-full h-full">

        <div className="bg-gray-400 text-white text-right text-4xl p-5 rounded">
          {value}
        </div>

        <div className="grid grid-cols-4 text-3xl bg-gray-100 font-semibold">
          {Calc}
        </div>

      </div>

    </div>
  );
}