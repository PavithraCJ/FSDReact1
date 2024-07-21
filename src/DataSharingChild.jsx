function DataSharingChild({chooseColor})
{
    const handleChange=(event)=>{
        chooseColor(event.target.value)
    }
    return(
        <div>
            <b>Child Component</b>
            <select onChange={handleChange}>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Orange">Orange</option>
                <option value="Blue">Blue</option>
                <option value="yellow">yellow</option>
            </select>
        </div>
    )
}
export default DataSharingChild;