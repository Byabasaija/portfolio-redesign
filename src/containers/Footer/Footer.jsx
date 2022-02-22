import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const form = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    emailjs.sendForm('service_t79lhio', 'template_jpx93yd', form.current, 'user_4UIPqhStZrrPsIS0ENw4K')
    .then((result) => {
        console.log(result.text);
        setLoading(false);
        setIsFormSubmitted(true);
    }, (error) => {
        console.log(error.text);
    });

    
  };

  return (
    <>
      <h2 className="head-text">  <span>Impressed? </span> Get my Resume</h2>
         <button type="button" className="p-text resume-btn" >
         <a href={images.resume}  download> Get my Resume</a>
         </button>

         <h2 className="head-text">  <span>Or </span> send me a message</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">basaijapascal9@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+265 708762210</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text"  onClick={handleSubmit} >{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Congratulations ! <span>🎉  </span>
            
          </h3>
        </div>
      )}

         <div className="copyright">
          <p className="p-text">@2022 PASCAL BYABASAIJA</p>
          <p className="p-text">All rights reserved</p>
        </div> 
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);