import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutImg from "../../assets/about.png";
import "./About.css";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-section">
                <div className="about-img">
                    <h1 className="about-heading">
                        Student minds, endless possibiities
                    </h1>
                    <img src={AboutImg} alt="" />
                </div>
                <div className="about-content">
                    We are a team of computer science
                    engineering students brought together
                    by Our shared passion for technology anc
                    innovation. What started as a g roup of
                    classmates has evol•ved into a close-knit
                    team. learning, collaborating. and
                    growing together.
                    Ou journey is fueled by curi.osity,
                    creativity, and a drrve to make a
                    difference. Join us as vee continue to
                    explore new technologies, build
                    meaningful projects and shape the
                    rutUre or technology.
                </div>
            
            </div>
            <Footer />
        </>
    )
}

export default About;