import { useEffect, useState } from "react";

function SideEffectsDemo()
{
    let[count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`Callback function in useEffect`)
    },[count])

//[]-empty dependency -the callback function in useEffect will get executed only once
//
return(
    <div>
        <button onClick={()=>setCount(++count)}>+</button>{count}
        <button onClick={()=>setCount(--count)}>-</button>
    </div>
)
}
export default SideEffectsDemo;