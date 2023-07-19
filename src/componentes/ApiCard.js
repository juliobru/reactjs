import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ApiCard({image, username}) {
  return (
    <Col lg={4}>
    <Card>
      <Card.Img variant="top" src={image} style={{ width: '20rem' }}/>
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>
         Descripcion del personaje
        </Card.Text>
        <Button variant="success"> Click </Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ApiCard;