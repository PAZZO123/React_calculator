export default function Calculator() {
  return (
    <div className="h-136 flex items-center justify-center bg-[#7A7B88] w-100">
      
      <div className="w-full h-full ">

   
        <div className="bg-gray-400 text-white text-right text-4xl p-5  rounded ">
    9
        </div>

        <div className="grid grid-cols-4 text-3xl bg-gray-100 font-semibold">

          <button className="btn border-1 border-[#AAAAB2] p-7">AC</button>
          <button className="btn border-1 border-[#AAAAB2]">+/-</button>
          <button className="btn border-1 border-[#AAAAB2]">%</button>
          <button className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">÷</button>

          <button className="btn border-1 border-[#AAAAB2] p-7">7</button>
          <button className="btn border-1 border-[#AAAAB2]">8</button>
          <button className="btn border-1 border-[#AAAAB2]">9</button>
          <button className="btn-op border-1 border-[#AAAAB2] bg-[#F38636]  text-white">×</button>

          <button className="btn border-1 border-[#AAAAB2] p-7">4</button>
          <button className="btn border-1 border-[#AAAAB2]">5</button>
          <button className="btn border-1 border-[#AAAAB2]">6</button>
          <button className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">−</button>

          <button className="btn border-1 border-[#AAAAB2] p-7">1</button>
          <button className="btn border-1 border-[#AAAAB2]">2</button>
          <button className="btn border-1 border-[#AAAAB2]">3</button>
          <button className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">+</button> 

          <button className="btn col-span-2 border-1 border-[#AAAAB2] p-7">0</button>
          <button className="btn border-1 border-[#AAAAB2]">.</button>
          <button className="btn-op bg-[#F38636] border-1 border-[#AAAAB2] text-white">=</button>

        </div>

      </div>

    </div>
  )
}