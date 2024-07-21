import { useState } from "react";
function EvenorOdd()
{
    let[num,setNum] = useState(0)
    let[result,setResult] = useState('')
    const isEven=()=>{
        if(num%2==0)
            {
                setResult(`The num ${num} is even`)
            }
        else
        {
            setResult(`The nume ${num} is odd`)
        }
    }

    return(
        <div>
            Enter a number : <br/>
            <input type="number" value={num} onChange={(event)=>setNum(event.target.value)}></input><br/><br/>
            <button onClick={()=>isEven()}>Submit</button><br/><br/>
            {result}
        </div>
    )
}
export default EvenorOdd;