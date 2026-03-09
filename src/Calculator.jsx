import { useState } from 'react'
export default function Calculator() {
  const [value, setValue]=useState("")
  //const [previous, setPrevious]=useState("")
  function getValue(num){
    setValue(value+num)
  }
  let previous=""
  let prevOp=""
  let currentnumber=""
 //let currentnumber=""
 function chooseOp(op){
 //setPrevious(previous)
 previous=value
  prevOp=op
  setValue("")
  
console.log(previous , prevOp , value)

 }
 function compute(){
  if(prevOp!==""){
    currentnumber=value
 if(prevOp==="+"){
  const result=+previous+(+currentnumber)
  setValue(result)
  console.log(result)
 }
  }
  prevOp=""
 }
 //returning the output Element
  return (
    <div className="h-136 flex items-center justify-center bg-[#7A7B88] w-100">
      
      <div className="w-full h-full ">

   
        <div className={`bg-gray-400 text-white text-right text-4xl ${value?"p-5":"p-10"}  rounded`} >
        {value}
        </div>

        <div className="grid grid-cols-4 text-3xl bg-gray-100 font-semibold">

          <button onClick={()=>setValue("0")} className="btn border-1 border-[#AAAAB2] p-7">AC</button>
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
          <button onClick={()=>{chooseOp("+"); compute();}} className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">+</button> 

          <button onClick={()=>getValue(0)} className="btn col-span-2 border-1 border-[#AAAAB2] p-7">0</button>
          <button onClick={()=>getValue(".")} className="btn border-1 border-[#AAAAB2]">.</button>
          <button onClick={()=>setValue(value)} className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">=</button>

        </div>

      </div>

    </div>
  )
}