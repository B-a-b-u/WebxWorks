import { NavLink } from 'react-router-dom';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import Logo from "../../assets/favicon.png"

const Footer = () => {
    return(
        <>
            <div className="footer-container">
                <div className="reactout">
                    <h3 className="section-heading">Address</h3>
                    <p>69, Mannar kudi street</p>
                    <p> Dubai kuruku santhu</p>
                    <p>dubai </p>
                    <h3 className="contact-num">Contact</h3>
                    <p>9994416162</p>
                </div>
                <div className="company-links">
                    <h3 className='section-heading'>Explore</h3>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="follow-links">
                    <h3 className="links">Reach out</h3>
                    {/* <NavLink to="/" className="logo"><img src={Logo} alt="" /></NavLink> */}
                    <SocialIcon url="www.x.com" />
                    <SocialIcon url="www.instagram.com" />
                    <SocialIcon url="www.linkedin.com" />
                    <SocialIcon url="www.google.com" />
                </div>

            </div>
        </>
    )
}

export default Footer;