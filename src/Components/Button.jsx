export default function Button(props){
  return (
    <button 
      onClick={props.handler} 
      className={`btn border border-[#AAAAB2] p-7 ${props.extra}`}
    >
      {props.value}
    </button>
  )
}