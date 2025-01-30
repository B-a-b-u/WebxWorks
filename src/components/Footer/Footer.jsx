import { NavLink } from 'react-router-dom';
import './Footer.css'
import { SocialIcon } from 'react-social-icons';
import Logo from "../../assets/favicon.png"

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="map">
                    {/* <iframe className="googemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.095779727642!2d76.97535529999999!3d11.0314404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855c4161a9b%3A0x972c4cbd634add05!2s7th%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738230356827!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
                    <iframe
                        className="googemap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.095779727642!2d76.97535529999999!3d11.0314404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855c4161a9b%3A0x972c4cbd634add05!2s7th%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738230356827!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: "0" }} /* ✅ Fix inline style */
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* <iframe className="googemap" src="webx-works.vercel.app" title="description"></iframe> */}
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.095779727642!2d76.97535529999999!3d11.0314404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855c4161a9b%3A0x972c4cbd634add05!2s7th%20St%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738230356827!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                <div className="reactout">
                    <h3 className="section-heading">Address</h3>
                    <address>
                        <a href="https://maps.app.goo.gl/7q7qsUYRhx49jCGm6" style={{ "text-decoration": "none", "color": "white" }} target='_blank'>
                            <p>69, Gandhipuram, 7th Street,</p>
                            <p>Coimbatore-641012, India</p>
                        </a>
                    </address>
                    <h3 className="section-heading">Contact</h3>
                    <p><a href="tel:+918608412138" style={{ "text-decoration": "none", "color": "white" }}>📞 +91-86084 12138</a></p>
                    <p><a className="email-text" href="mailto:webxworks1.0@gmail.com" style={{ "text-decoration": "none", "color": "white" }} >📧 webxworks1.0@gmail.com</a></p>
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
                    <SocialIcon url="www.instagram.com" href='https://www.instagram.com/webx_works/' target='_blank' />
                    <SocialIcon url="www.linkedin.com" href='https://www.linkedin.com/company/91086049/' target='_blank' />
                    <SocialIcon url="www.x.com" href='https://x.com/WebX_Works' target='_blank' />
                    <SocialIcon url="https://dribbble.com/" href='https://dribbble.com/WebxWorks' target='_blank' />
                </div>
            </div>
            <div className="copyrights-section">
                <p className="copyrigths">
                    © WebxWorks Private Limited 2025
                </p>
            </div>
        </>
    )
}

export default Footer;