import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../style'

const Tech = () => {
  return (
    <>
    <p className={styles.sectionSubText}>Technologies i know</p>
    <h2 className={styles.sectionHeadText}>Tech Stack. </h2>
     <div className='flex w-full flex-wrap flex-row justify-center gap-10 mt-4'>
    {technologies.map((technology)=>(
     technology.icon && (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      )
    ))}

    </div>
    </>
   
  )
}

export default SectionWrapper(Tech,"")
