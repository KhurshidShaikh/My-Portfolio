import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

  const fromRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name,value}=e.target;
    setForm({
      ...form,
      [name]:value
    })

   }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.name!==' ' && form.email!==''&& form.message!==''){
      setLoading(true);
      emailjs.send(
       "service_hrjgh5c",
       "template_7ub6g5e",
       {
        from_name:form.name,
        to_name:"Khurshid",
        from_email:form.email,
        to_email:"shaikhkhurshid112277@gmail.com",
        message:form.message,
       },
       "hOykb9KQ9J3dtSry5"
      ).then(()=>{
        setLoading(false)
        alert("Email sent successfully !")
  
        setForm({
          name:"",
          email:"",
          message:"",
        })
      },(error)=>{
         setLoading(false);
         alert("Something went wrong ")
      })
  
    }
    else{
      alert("please state your details")
    }
   

   }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className='mt-5 flex flex-col gap-9'
        >
          <label className='flex flex-col'>

            <span className='font-medium text-white mb-4'>
              Your Name
            </span>

            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='py-4 px-6 border-none  font-medium bg-tertiary
        placeholder:text-secondary text-white rounded-lg'

            />
          </label>
         
          <label className='flex flex-col'>

<span className='font-medium text-white mb-4'>
  Your Email
</span>

<input
  type="email"
  name='email'
  value={form.email}
  onChange={handleChange}
  placeholder="What's your email"
  className='py-4 px-6 border-none font-medium bg-tertiary
placeholder:text-secondary text-white rounded-lg '

/>


</label>  


 <label className='flex flex-col'>

<span className='font-medium text-white mb-4'>
  Your Message
</span>

<textarea
  rows="7"
  name='message'
  value={form.message}
  onChange={handleChange}
  placeholder="What do you want to say ?"
  className='py-4 px-6  font-medium bg-tertiary
placeholder:text-secondary text-white rounded-lg border-none'

/>

</label>
    <button
    type='submit'
    className='bg-tertiary py-3 px-8 outline-none w-fit rounded-xl text-white font-bold
    shadow-primary'
    
    >
     {loading?"Sending...":"Send"}

    </button>

        </form>


      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact");
