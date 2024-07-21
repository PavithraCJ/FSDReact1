import { useState } from "react";

function FilterNames()
{
    let[names,setNames]=useState([])
    let[inputName,setInputName]=useState('')
    
    const addme=()=>
        {
            names.push(inputName)
            console.log(names)
            setNames([...names])
        }
    let[searchValue,setValue]=useState('')
    const filter=()=>{
        names=names.filter((name)=>name.includes(searchValue))
        setNames([...names])

    }
    
    const handleChange=(event)=>{
        setValue(event.target.value)
        filter()
    }

    return(
        <div>
            <b>Enter the name to be added in the list</b>
            <input type="text" value={inputName} onChange={(event)=>setInputName(event.target.value)}></input><br></br>
            <button onClick={()=>addme()}>Add me</button><br></br>
            <b>Enter the name to be searched in the namelist</b><br></br>
            <input type="text" value={searchValue} onChange={handleChange}></input><br></br>
            <ul>
                {names?names.map((name)=><li>{name}</li>):''}
            </ul>
        </div>
    )
}
export default FilterNames;