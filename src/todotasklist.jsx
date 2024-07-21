import { useState } from "react"

function Todotasklist()
{
    let initialValue = {'task':'','completed':false}
    const[todolist,setTodoList]=useState(initialValue)
    const[todoarray,setTodoArray]=useState([])
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setTodoList({...todolist,[name]:value})
    }
    const handleSubmit=(event)=>
        {
            event.preventDefault()
            console.log(todolist)
            todoarray.push(todolist)
            setTodoArray([...todoarray])
            setTodoList(initialValue)
        }
    const handleDelete=(t)=>{
        const updateTodos = todoarray.filter((todolist)=>todolist.task!=t.task)
        setTodoArray(updateTodos)
    }
    const handleUpdate=(todo)=>{
        const updateTodos = todoarray.map((t)=>t.task===todo.task?{...t,completed:true}:t)
        //here we are shallow copying because it has to keep the other properties as same and change only the completed property so
        //we are giving ...t, //it copies the entire value of t, then change only the cmpleted value to the opposite one
      setTodoArray(updateTodos)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <labal htmlFor="task">Enter the task</labal>
                <input type="text" id="task" name="task" value={todolist.task} onChange={(event)=>handleChange(event)}></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
            {JSON.stringify(todoarray)}
            <ol>
                {todoarray && 
                todoarray.map((t)=>(
                    <li>{t.task}{t.completed?'Completed':'Not Completed'}
                    <button onClick={()=>handleDelete(t)}>Delete</button>
                    <button onClick={()=>handleUpdate(t)}>Update</button></li>
                ))}
            </ol>
        </div>
    )
}
export default Todotasklist;