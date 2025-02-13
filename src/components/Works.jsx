import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'

const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",0.5*index,0.75)}> 
    <Tilt
    options={{
     scale:1,
     max:45,
     speed:450
    }}
    className="w-full bg-tertiary p-5 rounded-2xl sm:w-[260px]"
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-contain' />

        <div className='absolute flex justify-end inset-0 m-3 card_img_hover'>
         
         <div 
         onClick={()=>{
          window.open(source_code_link,"_blank")
         }}
         className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
         </div>
        </div>
      </div>

      <div className=' '>
         <h3 className='text-white font-bold text-[24px]'>{name}</h3>
         <p className='text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-3 flex flex-wrap gap-2'>
        {tags.map((tag,index)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`} >
            #{tag.name}
            </p>
        ))}
      </div>
    </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}> My Work</p>

     <h2 className={styles.sectionHeadText}> Projects.</h2>
    </motion.div>

    <div className='w-full flex'>
     <motion.p
     variants={fadeIn("","",0.1,1)}
     className='mt-3 max-w-7xl leading-[30px] text-secondary text-[17px]'>
       Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
     </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=>(
        <ProjectCard key={index} {...project} index={index}/>
      ))}

    </div>
    
    </>
  )
}

export default SectionWrapper(Works,"work");