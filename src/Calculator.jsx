import { useState } from 'react';
export default function Calculator() {
  const [value, setValue]=useState("0")
  const [operator, setOperator]=useState("")
  const [previous, setPrevious]=useState("")
 
  // function getValue(num){
  //   value ==="0"?setValue(num):setValue(prev=>prev+num)
  // }

  function getValue(num) {
  // last action was operator, start new number
  if (value === previous) {
    setValue(num.toString());
  } else if (value === "0" && num !== ".") {
    setValue(num.toString());
  } else {
    setValue(prev => prev + num.toString());
  }
}

 function chooseOp(op){
if (previous!=="" && operator !=="" && value !==""){
  compute()
  console.log('computing....')
} else{
  setPrevious(value)
}
 
  setOperator(op)
  //setValue("")
  
//console.log(previous , operator , value)

 }
 // Computing function
 function compute(){
  if(operator ==="" || value === "" || previous === "") return ;
  const prev=Number(previous)
  const current=Number(value)
  let result=0
  switch (operator) {
    case "+":
      result=prev+current
      break;
    case "-":
      result=prev-current
      break;
    case "x":
      result=prev*current
      break;
    case "/":
      result=prev/current
      break;
    case "%":
      result=prev%current
      break;
    default:
      break;
  }
  setValue(result.toString())
  setPrevious(result.toString())
  setOperator("")
  setOperator("")
 }
 function clear(){
  setValue("0")
  setOperator("")
  setPrevious("")

 }
 //returning the output Element
  return (
    <div className="h-136 flex items-center justify-center bg-[#7A7B88] w-100">
      
      <div className="w-full h-full ">

   
        <div className={`bg-gray-400 text-white text-right text-4xl ${value?"p-5":"p-10"}  rounded`} >
        {value}
        </div>

        <div className="grid grid-cols-4 text-3xl bg-gray-100 font-semibold">

          <button onClick={clear} className="btn border-1 border-[#AAAAB2] p-7">AC</button>
          <button onClick={()=>setValue(prev=>-(+prev))} className="btn border-1 border-[#AAAAB2]">+/-</button>
          <button onClick={()=>chooseOp("%")} className="btn border-1 border-[#AAAAB2]">%</button>
          <button onClick={()=>chooseOp("/")} className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">÷</button>

          <button onClick={()=>getValue(7)} className="btn border-1 border-[#AAAAB2] p-7">7</button>
          <button onClick={()=>getValue(8)} className="btn border-1 border-[#AAAAB2]">8</button>
          <button onClick={()=>getValue(9)} className="btn border-1 border-[#AAAAB2]">9</button>
          <button onClick={()=>chooseOp("x")} className="btn-op border-1 border-[#AAAAB2] bg-[#F38636]  text-white">×</button>

          <button onClick={()=>getValue(4)} className="btn border-1 border-[#AAAAB2] p-7">4</button>
          <button onClick={()=>getValue(5)} className="btn border-1 border-[#AAAAB2]">5</button>
          <button onClick={()=>getValue(6)} className="btn border-1 border-[#AAAAB2]">6</button>
          <button onClick={()=>chooseOp("-")} className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">−</button>

          <button onClick={()=>getValue(1)} className="btn border-1 border-[#AAAAB2] p-7">1</button>
          <button onClick={()=>getValue(2)}  className="btn border-1 border-[#AAAAB2]">2</button>
          <button onClick={()=>getValue(3)} className="btn border-1 border-[#AAAAB2]">3</button>
          <button onClick={()=>{chooseOp("+")}} className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">+</button> 

          <button onClick={()=>getValue(0)} className="btn col-span-2 border-1 border-[#AAAAB2] p-7">0</button>
          <button onClick={()=>getValue(".")} className="btn border-1 border-[#AAAAB2]">.</button>
          <button onClick={compute} className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">=</button>

        </div>

      </div>

    </div>
  )
}