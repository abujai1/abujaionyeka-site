import Row from 'react-bootstrap/Row';
import Col  from  'react-bootstrap/Col';
import logo from './logo1.jpg'
import SubscriptionForm from './subscriptionComponent'; 

const FooterComponent = () => {
    return ( 
        <footer className='bg-dark p-2'>
            <Row className= 'container-fluid mt-4 mt-5'>
                    <Col xs={12} md={4} lg={3} >
                        <div  className='p-3'>
                            <img src={logo} alt= 'Frequency' style= {{maxWidth : '70'}}/>
                            <p className='text-light'>
                                We Make your work simple through technology                             
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3} >
                        <div  className='p-3'>
                            <h3 className= 'text-light'>
                                 Contact Us</h3>  
                            <p className='text-light'>
                                We Make your work simple through technology                             
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3} >
                        <div  className='p-3'>
                        <h3 className= 'text-light'>
                               Address</h3>  
                            <p className='text-light'>
                                We Make your work simple through technology                             
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} md={4} lg={3} >
                        <div  className='p-3'>
                        <h3 className= 'text-light'>
                               Subscribe</h3>
                            <SubscriptionForm />
                        </div>
                    </Col>
            </Row>
        </footer>
     );
}
 
export default FooterComponent;