import { useState } from "react";
import DataSharingChild from "./DataSharingChild";
function DataSharingParent()
{
    let[color,setColor]=useState('black')
    const chooseColor=(color)=>{
        setColor(color)
    }
    return(
        <div>
            <b>Parent Component</b>
            <div style={{color:color}}>Choosen color is {color}</div>
            <br/><br/>
            <DataSharingChild chooseColor={chooseColor}></DataSharingChild>
        </div>
    )
}
export default DataSharingParent;