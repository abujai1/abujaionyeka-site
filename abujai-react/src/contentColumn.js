import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imageFile from './images/computer.jpg'


const ContentColumn = () => {
    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageFile} />
        <Card.Body>
          <Card.Title>Networking </Card.Title>
          <Card.Text>
          Computer networking enables devices and endpoints to be connected to each other on a local area network (LAN) or to a larger network, such as the internet or a private wide area network (WAN). This is an essential function for service providers, businesses and consumers worldwide to share resources, use or offer services, and communicate. 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default ContentColumn;

