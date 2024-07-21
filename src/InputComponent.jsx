import { useState } from "react";

function InputComponent()
{
    let[name,setName] = useState('')
    let[age,setAge]=useState(0)

    const handleChange = (event) =>{
        console.log(event.target)
        setName(event.target.value)
    }
    const handleAge = (event) =>{
        setAge(event.target.value)
    }

    return(
        <div>
            Enter your name : <br/>
            <input type="text" value={name} onChange={handleChange}></input><br/><br/>
            Enter your age : <br/>
            <input type="number" value={age} onChange={handleAge}></input><br/>
            {name}
            {age}
         </div>
    )
}
export default InputComponent;