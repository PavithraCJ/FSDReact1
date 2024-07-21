import'./sample.css'
function UIButton()
{
    const greet=()=>//arrow function
    {
        alert("Hello...")
    }
    const sayBye=()=>{
        alert("BYEE...")
    }
    return(
        <>
        <button className="btn-class" onClick={()=>greet()}>ClickMe</button><br></br>
        <button onClick={()=>sayBye()}>Byee</button><br></br>
        </>
    )
}
export default UIButton;