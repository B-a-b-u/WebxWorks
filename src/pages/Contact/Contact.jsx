import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import './Contact.css';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact-section">
                <div className="contact-content">
                    <h1 className="contact-heading">Reach out to us</h1>
                    <p>'n us tod&cussyoor
                    nc.d:'asdfa a;sdkfa sdfa poiasdf aoi afdioaf aioj fafiajsd fao </p>
                    <div className="reachout">
                        <h3 className="section-heading">Address</h3>
                        <p>69, Mannar kudi street</p>
                        <p> Dubai kuruku santhu</p>
                        <p>dubai </p>
                        <h3 className="contact-num">Contact</h3>
                        <p>9994416162</p>
                        <p>webxworks.gmailcom</p>
                </div>

                </div>
                <div className="contact-form-container">
                <h1 className="contact-heading">Message here</h1>
                    <form className='contact-form'>
                        <label htmlFor='email'>Email </label>
                        <input
                            id='email'
                            type='email'
                            placeholder='web@gmail.com'
                            required
                        />
                        <label htmlFor='msg-box'>Message</label>
                        <textarea
                            id='msg-box'
                            placeholder='something something'
                            required
                        />
                        <button type='submit' className='submit-btn' >Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;