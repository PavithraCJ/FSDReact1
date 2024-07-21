import { useState } from "react";
function Dropdown()
{
    let[city,setcity] = useState('')
    return(
        <div>
            <select onChange={(event)=>setcity(event.target.value)}>
                <option value="CHN">Chennai</option>
                <option value="BANG">Bangalore</option>
                <option value="KOL">Kolkata</option>
                <option value="DEL">Delhi</option>
            </select>
            {`You have selected ${city}`}
        </div>
    )
}
export default Dropdown;