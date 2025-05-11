import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './ContactUs.css';
import ContactUsSvg from '../../image/contact.svg'
import {motion, useInView } from "framer-motion";

function ContactUs() {
  const form = useRef();
  const [validationError, setValidationError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic form validation
    const name = form.current.from_name.value.trim();
    const email = form.current.from_mail.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setValidationError('Please fill out all fields.');
      return;
    }

    // Clear previous validation error
    setValidationError('');

    // Your emailjs logic here
    emailjs
      .sendForm(
        "service_nrithnx",
        "template_wi73xj5",
        form.current,
        "H_E1zqUt0b52Y-RI4"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmissionSuccess(true);
          // Additional actions after successful submission
        },
        (error) => {
          console.log("Error sending email:", error.text);
          // Additional actions in case of an error
        }
      );
  };


  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.4 , once:true }) ;  //element eke 0.3 k penna thiyeddi animate wenn patan gnnwa

  const container = {
    hidden: { 
      opacity: 0,
      y:100 
      },

    visible: {
      opacity: 1,
      y:0,
      
    }
  };


  return (
    <div className="ContactUs-page" id="contactus">
    <motion.div className="contact-container" 
    variants={container} ref={ref}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
    transition={{delay:0.3,duration:0.5}}>
      <h2>Let’s Discuss Your Project</h2>
    <div className="contact-form-container">
      <div className="contact-form">
        {submissionSuccess ? (
          <p className="submission-success">Submission successful! We'll get in touch with you soon.</p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            {/* {validationError && <p className="validation-error">{validationError}</p>} */}
            <div className="input-group">
              <div>
                <label>Your Name</label>
                <input type="text" name="from_name" />
              </div>
              <div>
                <label>Your Email</label>
                <input type="email" name="from_mail" />
              </div>
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea name="message" style={{ gridColumn: '1 / span 2' }} />
            </div>
            <div className="input-group-submit">
              <input type="submit" value="Submit" />
              {validationError && <p className="validation-error">{validationError}</p>}
            </div>
          </form>
        )}
      </div>
      <div className="SvgContainer">
        <img src={ContactUsSvg} alt="ContactSvg"/>
      </div>
    </div> 
    </motion.div>
    </div>
  );
}

export default ContactUs;
