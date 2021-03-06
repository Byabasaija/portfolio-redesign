import React from 'react'
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="header-text">Pascal</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer,</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      <a rel="noreferrer" href="https://github.com/Byabasaija" target="_blank">
        <div className="circle-cmp app__flex" >
          <img src={images.github} alt="profile_bg" />
        </div>
        </a>

        <a rel="noreferrer" href="https://twitter.com/byabashaijapoet" target="_blank">
        <div className="circle-cmp app__flex" >
          <img src={images.twitter} alt="profile_bg" />
        </div>
        </a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/pascal-byabasaija/" target="_blank">
        <div className="circle-cmp app__flex" >
          <img src={images.linkedin} alt="profile_bg" />
        </div>
        </a>
      
    </motion.div>
  </div>
  )
}

export default 
AppWrap(Header, 'home');