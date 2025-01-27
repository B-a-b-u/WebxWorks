
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import './Services.css';
import Card from '../../components/Card/Card';

const Services = () => {


  return (
    <>
            <Navbar/>
            <div className="services-section">
              <div className="services-heading-container">
                <h1 className="services-heading">
                  Services
                </h1>
              </div>
              <div className="services-cards-container">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
              </div>
            </div>
            <Footer/>
        </>
  )
}

export default Services