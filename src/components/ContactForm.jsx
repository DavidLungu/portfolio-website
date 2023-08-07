import { Link } from "react-router-dom"
import "./ContactForm.css"
import React, { useRef } from 'react'
import { BsWhatsapp, BsLinkedin } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import emailjs from "emailjs-com"

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uc7tdqe', 'template_7rw4d13', form.current, 'thrRCOyq5kIct5N-q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
      };

    return (
        <div className="contact-page">
            <div className="container contact__container">
                <div className="contacts">
                    <article className="contact">
                        <MdOutlineEmail className="contact__icon"/>
                        <h4>Email</h4>
                        <h5>davlungu3@gmail.com</h5>
                        <Link to="mailto:davlungu3@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</Link>
                    </article>
                    <article className="contact">
                        <BsWhatsapp className="contact__icon" />
                        <h4>Whatsapp</h4>
                        <h5>+1 (469)-432-7277</h5>
                        <Link to="https://wa.me/14694327277" target="_blank" rel="noopener noreferrer">Send a message</Link>
                    </article>
                    <article className="contact">
                        <BsLinkedin className="contact__icon" />
                        <h4>Linked In</h4>
                        <h5>David Lungu</h5>
                        <Link to="https://www.linkedin.com/in/david-lungu-723a85242/" target="_blank" rel="noopener noreferrer">Send a message</Link>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="name" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message"></textarea>
                    <div className="submit-button">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ContactForm