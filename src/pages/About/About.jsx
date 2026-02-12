import AboutImg from "../../assets/about.png";
import About2 from "../../assets/about3.png";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about-section">
            <div className="about-section1">
                <div className="about-content">
                <h1 className="about-heading">
                        About Us
                </h1>
                <div className="about-subcontent">
                We are a passionate team of young tech enthusiasts driven by our love for technology and innovation. We began as a group of curious learners has evolved into a cohesive team dedicated to exploring cutting-edge solutions and building meaningful projects. With diverse skills and a shared vision, we bring creativity and technical expertise to every project we undertake. Our journey is not just about coding but about fostering a culture of innovation, teamwork, and continuous learning. We are committed to solving real-world problems, contributing to the tech community, and making a positive impact on society.
                </div>
                </div>
                <div className="about-img-container">
                <img className="about-img" src={AboutImg} alt="" />
                </div>
            </div>
            <div className="about-section2">
                <div className="about-content">
                <h1 className="about-heading">
                        Young minds, endless possibiities
                </h1>
                <div className="about-subcontent">
                Our journey is fueled by creativity, curiosity, and an unrelenting drive to make a difference. We specialize in crafting innovative web solutions, developing applications, and experimenting with emerging technologies. By combining technical expertise with teamwork, we aim to solve real-world problems and shape the future of technology. Join us as we continue to innovate and grow.
                </div>
                </div>
                <div className="about-img-container">
                <img className="about-img" src={About2} alt="" />
                </div>
            </div>
            </div>
        </>
    )
}

export default About;