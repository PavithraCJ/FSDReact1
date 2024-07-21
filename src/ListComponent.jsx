function ListComponent()
{
    let names=["John","Jacob","Smith","Clara"];
    let fruits=["Apple","Guava","Pomogranate","Mango"];
    return(<>
    
    <h3>List of Names</h3>
    <ul>
    {/* Static way of creating a component */}
    {/* <li>John</li>
        <li>Jacob</li>
        <li>Smith</li>
        <li>Clara</li> */}
    
    {/* Displaying array of values in JSX - Dynamic */}
    {/* If names is not undefined then return li else return Loading... */}

    {names?names.map((name)=><li>{name}</li>):'Loading...'}
    </ul>
    <h3>List of fruits</h3>
    <ul>
        {fruits?fruits.map((fruit)=><li>{fruit}</li>):'Loading...'}
    </ul>
    </>)
}

export default ListComponent