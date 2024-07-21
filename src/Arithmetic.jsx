import { useState } from "react";
function Arithmetic()
{
    let[num1,setNum1]= useState(0)
    let[num2,setNum2] = useState(0)
    let[result,setResult]=useState('')
    const add=()=>
        {
            setResult(num1+num2);
        }
    const sub=()=>
        {
            setResult(num1-num2);
        }
    return(
        <div>
            Enter the first number:<br/>
            <input type="text" value={num1} onChange={(event)=>setNum1(Number(event.target.value))}></input><br/>
            Enter the second number:<br/>
            <input type="text" value={num2} onChange={(event)=>setNum2(Number(event.target.value))}></input><br/>
            <input type="Submit" value="ADD" onClick={()=>add()}></input><br/><br/>
            Sum : {result}<br/><br/>
            <input type="Submit" value="SUB" onClick={()=>sub()}></input><br/><br/>
            Sub : {result}

        </div>
    )
}
export default Arithmetic;