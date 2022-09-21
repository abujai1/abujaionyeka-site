import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponet';
//import logo from './logo.svg';  
import NarvbarComponent from './narvbarComponent';
import HomeComponent from './home'
import FooterComponent from './footerComponent'; 

function App() {

  return (
    <div className="App">
       <header>
        < NarvbarComponent />
       </header>
       <CarouselComponent/>
       <HomeComponent/>
       <FooterComponent />
    </div>
  );
}

export default App;
