import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {

  const [sended , isSended] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    emailjs.sendForm(
      "service_v0su4ss",
      "template_ln3z1yy",
      form.current,
      "4WWbB6ehiZzsNHAkJ"
    );
    form.current.reset();
    isSended(true);
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='icon' />
            <h4>Email</h4>
            <h5>bhavishyamalhotra7@gmail.com</h5>
            <a href='mailto:bhavishyamalhotra7@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <MdOutlineMail className='icon' />
            <h4>Linkedin</h4>
            <h5>@Bhavisshyya</h5>
            <a href='https://www.linkedin.com/in/bhavisshyya' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <MdOutlineMail className='icon' />
            <h4>Whatsapp</h4>
            <h5>+91 7678111278</h5>
            <a href='http://api.whatsapp.com/send?phone=7678111278'>
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='your full name'
            required
          />
          <input type='email' name='email' placeholder='your email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary' onClick={sendEmail}>
            Send Message
          </button>
          {sended && <h3 className="lastText">Thanks, I'll reply ASAP :) </h3> }
        </form>
       
      </div>
    </section>
  );
}

export default Contact;
