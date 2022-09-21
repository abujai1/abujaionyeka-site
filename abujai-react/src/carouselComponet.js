import Carousel from 'react-bootstrap/Carousel';
import Slider1 from './images/Slider1.jpg'
import Slider2 from './images/Slider2.jpg'
import Slider3 from './images/Slider3.jpg'
import Slider4 from './images/Slider4.jpg'
import Slider5 from './images/Slider5.jpg'


 const CarouselComponent = () => {
    return ( 
        <Carousel className='sliderheight'>
      <Carousel.Item className='sliderheight'>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText">FREQUENCY TECH</h3>
          <p className="sliderText">WE SUPPLY IT GADGETS.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderheight'>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText">FREQUENCY TECH</h3>
          <p className="sliderText">REPAIR AND TROUBLESHOOT ALL IT GADGET.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderheight'>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText">FREQUENCY TECH</h3>
          <p className="sliderText">
            LINKS YOUR OFFICES THROUGHT INTERCOMM.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderheight'>
        <img
          className="d-block w-100"
          src={Slider4}
          alt="Fort slide"
        />

        <Carousel.Caption>
          <h3 className="sliderText">BUILDING A GLOBAL TECHNOLOGY </h3>
          <p className="sliderText">FOR EASE OF WORK.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='sliderheight'>
        <img
          className="d-block w-100"
          src={Slider5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3 className="sliderText">OUR SERVICES ARE FIRST CLASS</h3>
          <p className="sliderText">AT FREQUENCY TECH                                                                                                            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     );
 }
  
 export default CarouselComponent;