import './Services.css';
import Card from '../../components/Card/Card';
import  webdev  from "../../assets/services/webdev.svg"
import  appdev  from "../../assets/services/appdev.svg"
import  gamedev  from "../../assets/services/game2dev.svg"
import  cs  from "../../assets/services/cybersecurity.svg"
import  uiux  from "../../assets/services/UIUX.svg"
import  ml  from "../../assets/services/aiml.svg"



const Services = () => {

  const services = [
    {
      img: webdev,
      service: "Web Development",
      description: "We design and develop high-quality, scalable, and responsive websites tailored to your business needs. Our expertise spans across front-end, back-end, and full-stack development, ensuring a seamless digital experience.",
    },
    {
      img: appdev,
      service: "App Development",
      description: "We build intuitive and feature-rich mobile applications for both iOS and Android. Whether it's a native, hybrid, or cross-platform app, we focus on performance, security, and user-friendly interfaces.",
    },
    {
      img: ml,
      service: "AI & ML",
      description: "Harness the power of Artificial Intelligence and Machine Learning with our cutting-edge solutions. From predictive analytics to automation, we help businesses leverage AI for smarter decision-making.",
    },
    {
      img: cs,
      service: "Cyber Security",
      description: "Protect your business with our advanced cybersecurity solutions. We offer threat detection, penetration testing, data encryption, and security audits to safeguard your digital assets from cyber threats.",
    },
    {
      img: gamedev,
      service: "Game Development",
      description: "From engaging 2D & 3D games to immersive AR/VR experiences, we develop high-performance games with stunning visuals and seamless gameplay. Our team ensures an engaging user experience across all platforms.",
    },
    {
      img: uiux,
      service: "UI/UX Designing",
      description: "We craft visually appealing and user-friendly interfaces that enhance user engagement. Our UI/UX design services focus on usability, accessibility, and a seamless user experience to elevate your brand.",
    },
];

  return (
    <>
      <div className="services-section">
        <div className="services-heading-container">
          <h1 className="services-heading">
            Services
          </h1>
        </div>
        <div className="services-cards-container">
          {
            services.map((service, index) => (
              <Card key={index} image={service.img} service={service.service} description={service.description} />
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Services