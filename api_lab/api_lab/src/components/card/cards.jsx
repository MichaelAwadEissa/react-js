import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function BasicExample(props) {
  return (
    <Card style={{ width: props.width }}>
      <Card.Img variant="top" src={props.logo}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {props.about && <Card.Text>
          {props.about}
        </Card.Text>}
        <Card.Text>
          {props.location}
        </Card.Text>
        {props.size && <Card.Text>
          number of employee:{props.size}
        </Card.Text>}
        {props.btnName && <Button as={Link} to={props.url} variant="primary">{props.btnName}</Button>
 }
      </Card.Body>
    </Card>
  );
}

export default BasicExample;