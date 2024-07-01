import React from 'react'
import { styles } from '../style'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import{fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'


const ServiceCard=({title,icon,index})=>{
  return(
<Tilt className="w-full xs:w-[250px]">
<motion.div
variants={fadeIn("right","spring",0.5*index,0.75)}
className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
>
  <div
  options={{
    max:45,
    scale:1,
    speed:450
  }}
  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col' 
  >
    <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
    <h3 className='text-white text-[20px] text-center font-bold  mt-3'>{title}</h3>

  </div>

</motion.div>


</Tilt>
  )


}

const About = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
     
     <motion.p
     variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      I'm a skilled front-end developer proficient in HTML, CSS, and JavaScript, with a strong foundation in React and a knack for utilizing CSS frameworks like Tailwind CSS to create responsive and visually appealing web applications. With a passion for clean, efficient code and a commitment to staying updated with the latest web development trends, I thrive in dynamic environments where innovation and problem-solving are key. As a quick learner, I adapt swiftly to new technologies and methodologies, ensuring that I deliver high-quality solutions that meet both user needs and business objectives.

     </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
           {services.map((service,index)=>(
            <ServiceCard key={index}  index={index} {...service}/>
           ))}
      </div>

    </>
  )
}

export default SectionWrapper(About,"about");