import { useState } from "react";
import SearchComponent from "./SearchComponent";
function StudentDetails()
{
    let[names,setNames]=useState(['john','jacob','smith','adam','clara','tom','jerry','james','joe','angel'])
    let[filteredNames,setFilteredNames]=useState('')
    const handleSearch=(searchTerm)=>{
        if(searchTerm==='')
            setFilteredNames(names)
        else
            setFilteredNames(names.filter((name)=>name.includes(searchTerm)))
    }
    return(
        <div>
            <SearchComponent handleSearch={handleSearch}></SearchComponent>
            <b>Parent Component</b><br></br>
            {filteredNames && filteredNames.map((name)=><b>{name}<br></br></b>)}
        </div>
    )
}
export default StudentDetails;