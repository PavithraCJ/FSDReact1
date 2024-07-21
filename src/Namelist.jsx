import { useState } from "react";

function Namelist()
{
    let[names,setName] = useState([])
    let[inputName,setInputName] = useState('')
    const addName=()=>
        {
            names.push(inputName)
            console.log(names)
            setName([...names])//shallow copy we are passing the new reference to the setName
            

        }

        return(
            <div>
                Enter Name:
                <input type="text" value={inputName} onChange={(event)=>setInputName(event.target.value)}></input>
                <button onClick={()=>addName()}>+</button>
                <b>List of Names</b>
                <br></br>
                <ul>
                    {names?names.map((name)=><li>{name}</li>):''}
                </ul>

            </div>
        )
}
export default Namelist