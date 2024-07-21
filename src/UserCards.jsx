
import Card from 'react-bootstrap/Card';


function UserCards({user})
{
    return(
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
          <h5>Address:</h5>
          {user.address.street}
          {user.address.city}
        </Card.Text>
        <Card.Link href="#">{user.email}</Card.Link>
        <Card.Link href="#">{user.website}</Card.Link>
      </Card.Body>
    </Card>
        </div>
    )
}
export default UserCards;