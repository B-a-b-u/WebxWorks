import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HSImg from "../../assets/herosection.png"
import './Home.css'

const Home = () => {
    return(
        <>
           <Navbar/>
           <div className="hero-section">
                <div className="hero-section-content">
                    <h1 className="slogan">
                        Building tomorrow's solution today itself!
                    </h1>
                    <p className="sub-slogan">
                        A team of young passionate tech enthusiats
                    </p>
                    
                </div>
                <div className="hero-image">
                        <img src={HSImg} />
                    </div>
           </div>
           <Footer/>
        </>
    )
}

export default Home;