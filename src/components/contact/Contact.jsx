import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvc456o', 'template_5qtu3ah', form.current, 'p_BO5Aw7OGX5y2K4C')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <section id='contact' className='section__contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>agnarizkyputra@gmail.com</h5>
            <a href="mailto:agnarizkyputra@gmail.com" target="_blank">Send A Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Agna Rizky</h5>
            <a href="https://m.me/AgnaRizky182" target="_blank">Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+6281235003948</h5>
            <a href="https://wa.me/+6281235003948" target="_blank">Send A Message</a>
          </article>
        </div>
        {/*End Of Contact Option*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send A Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact