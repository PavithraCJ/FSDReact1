import {useState} from "react"
function Counter()
{
    let[count,setCounter] = useState(0)
    return(
        <>
            <button onClick = {()=>setCounter(count++)}>+</button>{count}<button onClick = {()=>setCounter(count--)}>-</button>
        </>
    )
}
export default Counter;