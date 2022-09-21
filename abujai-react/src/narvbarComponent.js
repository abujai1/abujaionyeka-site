import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from './logo1.jpg'
import Image from 'react-bootstrap/Image'



const NarvbarComponent = () => {
  const styleNav= {
        marginLeft: '-1px'
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='container-fluid' fluid>
                    <Navbar.Brand href="#home" >
                        <Image src= {logo1} rounded className="navHead" />
                        <p className="darkHeading navHead fontsize: '10px'Bold">FREQUENCY TECH</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={styleNav}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Our Vision</Nav.Link>
                            <NavDropdown title="InfoTech Services " id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">IT Consultancy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    CCTV
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Website in 24hrs
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Hardwares</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">Intercomm TeleConnect</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.6">
                                    Internet Consult
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">
                                    Networking
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">
                                    Online IT Solution
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        
    );
}

export default NarvbarComponent;