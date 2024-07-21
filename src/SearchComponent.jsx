import { useState } from "react";

function SearchComponent({handleSearch})
{
    let[search,setSearch]=useState('')
    const handleChange=(event)=>{
        setSearch(event.target.value)
        handleSearch(event.target.value)
    }
    return(
        <div>
            <b>Search:</b><br/>
            <input type="search" value={search} onChange={handleChange}></input><br/><br/>
        </div>
    )
}
export default SearchComponent;