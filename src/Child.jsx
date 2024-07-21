function Child(props)
{
    let textcolor = props.txtColor;
    let text = props.text;

    return(
        <div>
            <p style={{color:textcolor}}>{text}</p>
        </div>
    )
}
export default Child;