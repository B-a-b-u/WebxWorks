import './Contact.css';
import { SocialIcon } from 'react-social-icons';
import ContactForm from '../../components/Contact/ContactForm';

const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <div className="contact-headings">
                    <h1 className="contact-heading">Reach out to us</h1>
                    <p className="contact-subheading">Let's build something amazing together.</p>
                    <p className="contact-subheading">Have a project in mind? Get in touch with us and Let's make it Happen</p>
                </div>
                <div className="contact-subsection">
                    <div className="contact-section1">
                        <div className="contact-headings">
                            <h3 className="section-heading">Address</h3>
                            <address>
                                <p>69, Gandhipuram, 7th Street,</p>
                                <p>Coimbatore-641012, India</p>
                            </address>
                            <h3 className="section-heading">Contact</h3>
                            <p>+91-86084 12138</p>
                            <p>webxworks1.0@gmail.com</p>
                        </div>

                    </div>
                    <div className="contact-section2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;