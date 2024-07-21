import Table from 'react-bootstrap/Table';

function UserTable({user})
{
    return(
        <div>
            <Table>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                         <td>{user.username}</td>
                         <td>{user.email}</td>
                        <td>{user.website}</td>

                    </tr>
                </tbody>
                </Table>

        </div>
    )
}
export default UserTable;