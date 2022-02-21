import React,{ useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { images } from '../../constants'

const abouts = [
  {title: "Web developement",
  desc: "i am a proffesional web developer who loves problem solving",
  imgUrl: images.about04
 },
 {title: "UI designer",
 desc: "I design simple and elegant UI/UX for your business to thrive",
 imgUrl: images.about01
},
{title: "MERN expert",
desc: "When it comes to the popular MERN stack, i am an expert",
imgUrl: images.about03
}
]

const About = () => {
  return (
    <>
    <h2 className="head-text">
      I Know That 
      <span> Good Design </span> <br />
      means
      <span> Good business</span>
    </h2>

    <div className="app__profiles">
       {abouts.map((about, index)=>(
         <motion.div  whileInView={{opacity:1}}
         whileHover={{scale:1-1}}
         transition={{duration: 0.5,  type: 'tween'}}
         className="app__profile-item"
         key={about.title+index}>
           <img src={about.imgUrl} alt={about.title} />
           <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
           <hp className="p-text" style={{marginTop:10}}>{about.desc}</hp>
          
         </motion.div>
       ))}
    </div>
    </>
  )
}

export default About