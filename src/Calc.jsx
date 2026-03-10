import { useState } from "react";

export default function Calculator() {

  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [previous, setPrevious] = useState("");

  function getValue(num){
    if(value === "0"){
      setValue(num.toString());
    } else {
      setValue(prev => prev + num);
    }
  }

  function chooseOp(op){

    if(previous !== "" && operator !== "" && value !== ""){
      compute();
    } else {
      setPrevious(value);
    }

    setOperator(op);
    setValue("0");
  }

  function compute(){

    if(previous === "" || operator === "") return;

    const prev = Number(previous);
    const current = Number(value);

    let result = 0;

    if(operator === "+"){
      result = prev + current;
    }
    else if(operator === "-"){
      result = prev - current;
    }
    else if(operator === "x"){
      result = prev * current;
    }
    else if(operator === "/"){
      result = prev / current;
    }
    else if(operator === "%"){
      result = prev % current;
    }

    setValue(result.toString());
    setPrevious(result.toString());
    setOperator("");
  }

  function clear(){
    setValue("0");
    setPrevious("");
    setOperator("");
  }

  return (
    <div className="h-136 flex items-center justify-center bg-[#7A7B88] w-100">

      <div className="w-full h-full">

        <div className="bg-gray-400 text-white text-right text-4xl p-5 rounded">
          {value}
        </div>

        <div className="grid grid-cols-4 text-3xl bg-gray-100 font-semibold">

          <button onClick={clear} className="border p-7">AC</button>
          <button onClick={()=>setValue(prev => (-(+prev)).toString())} className="border">+/-</button>
          <button onClick={()=>chooseOp("%")} className="border">%</button>
          <button onClick={()=>chooseOp("/")} className="bg-orange-400 text-white border">÷</button>

          <button onClick={()=>getValue(7)} className="border p-7">7</button>
          <button onClick={()=>getValue(8)} className="border">8</button>
          <button onClick={()=>getValue(9)} className="border">9</button>
          <button onClick={()=>chooseOp("x")} className="bg-orange-400 text-white border">×</button>

          <button onClick={()=>getValue(4)} className="border p-7">4</button>
          <button onClick={()=>getValue(5)} className="border">5</button>
          <button onClick={()=>getValue(6)} className="border">6</button>
          <button onClick={()=>chooseOp("-")} className="bg-orange-400 text-white border">−</button>

          <button onClick={()=>getValue(1)} className="border p-7">1</button>
          <button onClick={()=>getValue(2)} className="border">2</button>
          <button onClick={()=>getValue(3)} className="border">3</button>
          <button onClick={()=>chooseOp("+")} className="bg-orange-400 text-white border">+</button>

          <button onClick={()=>getValue(0)} className="col-span-2 border p-7">0</button>
          <button onClick={()=>getValue(".")} className="border">.</button>
          <button onClick={compute} className="bg-orange-400 text-white border">=</button>

        </div>

      </div>

    </div>
  );
}