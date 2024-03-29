import React from "react";
import "./contact.css";

import { BiMailSend } from "react-icons/bi";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className="contact__option-icon" />
            <h4>Email</h4>
            <h5>krish_sth2005@yahoo.com</h5>
            <a href="mailto:krish_sth2005@yahoo.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>

            <a href="https://m.me/krishna.shrestha.3367">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+61449629547</h5>
            <a href="https://api.whatsapp.com/send?phone=+61449629547">
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
