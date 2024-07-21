import { useState } from "react";

function Changecolor()
{
    let[color,setColor]=useState('')
    const handleChange = (event)=>
        {
            setColor(event.target.value)
        }

    return(
        <div>
            <b>Select a color</b>
            <select onChange={handleChange}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="violet">Violet</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
            </select>
            <p style={{color:color}}>This text will be displayed in {color} color.</p>
        </div>
    )
}
export default Changecolor;