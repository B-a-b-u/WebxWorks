import home from "../../assets/home.png"
import home3 from "../../assets/home3.png";
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-section1">
                    <div className="hero-section-content">
                        <h1 className="slogan">
                            Building tomorrow's solution today itself!
                        </h1>
                        <p className="sub-slogan">
                            At WebxWorks, we transform your ideas into innovative web experiences. From stunning websites to robust applications, we build solutions that redefine possibilities. Our team combines creativity, technology, and strategy to deliver exceptional results tailored to your unique needs. Whether you're a startup aiming to make an impact or an established brand seeking a digital edge, we craft scalable and user-centric solutions.
                        </p>

                    </div>
                    <div className="hero-image-container">
                        <img className="hero-image" src={home} />

                    </div>
                </div>
                <div className="hero-section2">
                    <div className="hero-section-content">
                        <h1 className="slogan">
                            Why Choose us?
                        </h1>
                        <p className="sub-slogan">
                            At WebXWorks, we deliver tailored web solutions that blend creativity and functionality, ensuring your digital presence stands out. With cutting-edge technology, user-focused design, and a commitment to excellence, we help bring your vision to life — on time and within budget.
                        </p>
                    </div>
                    <div className="hero-image-container">
                        <img className="hero-image" src={home3} />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home;