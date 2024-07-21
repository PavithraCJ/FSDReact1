function ReusableList(props)
{
    let title=props.heading;
    let values=props.data;
    return(
        <div>
            <h3>{title}</h3>
            <ul>
                {values?values.map((value)=><li>{value}</li>):'Loading...'}
            </ul>
        </div>
    )
}
export default ReusableList;