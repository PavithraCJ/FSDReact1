import { useEffect, useState } from "react";
import UserTable from "./UserTable";
import Table from 'react-bootstrap/Table';
import UserCards from "./UserCards";

function UserData()
{

    let[users,setUsers] = useState([])
    let[search,setSearch]=useState('')
    async function getAllUsers()
    {
        try
        {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let data = await response.json()
            console.log(data)
            setUsers(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const handleChange = (event)=>{
        setSearch(event.target.value)
    };

    //filter only the searched users
    let filteredUsers = search? users.filter((user)=>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.address.city.toLowerCase().includes(search.toLowerCase())
    ):users;


    useEffect(()=>{
        getAllUsers()
    },[])

    return(
        <div>
            {/* {users && users.map((user)=><div>{JSON.stringify(user)}<hr/></div>)} */}
            {/* <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
            </Table>
            {users && users.map((user)=><UserTable user={user}></UserTable>)} */}

            {/* {users && users.map((user)=><UserCards user={user}></UserCards>)} */}


            <b>Search User</b>
            <input type="search" value={search} onChange={handleChange}></input>
            <div className="card-container">
            {filteredUsers && filteredUsers.map((user)=><UserCards user={user}></UserCards>)}
            </div>
        </div>
    )
}
export default UserData;