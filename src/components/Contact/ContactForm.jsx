import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { NavLink } from 'react-router-dom';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjkgwqea");
  if (state.succeeded) {
    return (
      <>
        <div className="form-submitted">
          <p>Form Submitted!</p>
          <NavLink to="/" ><button className="home-btn">Go home</button></NavLink>

        </div>
      </>
    )
  }
  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label htmlFor="email" className="section-heading">
        Enter Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder='youremail@gmail.com'
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
        placeholder='Start Writing here...'
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button className="submit-btn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;