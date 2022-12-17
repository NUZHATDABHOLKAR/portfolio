import {motion} from 'framer-motion'
import './index.css'
import {BsWindow} from "react-icons/bs";
export default function About() {
  return (
    <motion.div  initial={{width:0}} animate={{width:'100%'}} exit={{width:'100%'}} className='About bg-red-50 '>
    <div className=' mt-80 md:mt-80 lg:mt-24'>  
    <h1 className='heading'>About Me</h1> 
    <hr className='line'/>
    <h2 className='name'>I'm Nuzhat Dabholkar and <span>Frontend web Developer</span></h2>
    <h4 className='des'>I'm front-end-developer (ReactJS). I'm designing and developing websites to be easy to use and responsive to suits all<br/> screen sizes using the latest web techniques .I keep my skills updated and learning Modern technologies to make the website more interactive with user.</h4>
    <div className='flex flex-col lg:flex-row text-3xl w-full'>
     <div className='flex-col mt-12 ml-0 w-1/2'>
      <h2 className='text-xl'><b><i>Birthday : </i></b> 12 October 1999</h2>
      <hr className='line'/>
      <h2 className='text-xl mt-2'><b><i>Email : </i></b> nuzhatdabholkar1210gmail.com</h2>
      <hr className='line'/>
      <h2 className='text-xl mt-2'><b><i>City : </i></b>Ratnagiri,Maharshtra</h2>
     </div>
     <div>
     <div className='flex text-3xl  ml-0 lg:ml-12 w-1/1'>
     <div className='flex-col mt-12 ml-0'>
      <h2 className='text-xl'><b><i>Age :</i></b>23</h2>
      <hr className='line'/>
      <h2 className='text-xl mt-2'><b><i>Phone : </i></b>7028610063</h2>
      <hr className='line'/>
      <h2 className='text-xl mt-2'><b><i>Github:</i></b>github.com/NUZHATDABHOLKAR</h2>
       
     </div>
    </div>

    </div>
    </div>
     <a href="https://resume.io/r/Pf9ldN8iu"><button className='btn1 mt-12'>Resume </button></a>
     
     <div className='container bg-red-50  flex flex-col lg: flex-row'>
       <div><h1 className='headingforskill flex flex-row'>My Skills </h1></div>
       <div className='flex flex-col lg:flex-row  '>
       <div className='flex flex-col w-full lg:w-1/2'>
         <div className='skill-box'>
            <span className='title'>HTML</span>
            <div className='skill-bar'>
              <span className='skill-per html'>
                <span className='tooltip'>90%</span>
              </span> 
            </div>
         </div>
         <div className='skill-box'>
            <span className='title'>CSS</span>
            <div className='skill-bar'>
              <span className='skill-per css'>
                <span className='tooltip'>85%</span>
              </span> 
            </div>
         </div>
         <div className='skill-box'>
            <span className='title'>TAILWIND CSS</span>
            <div className='skill-bar'>
              <span className='skill-per tailwindcss'>
                <span className='tooltip'>85%</span>
              </span> 
            </div>
         </div>
       </div>
       <div className='flex flex-col  w-full  lg:w-1/2'>
         <div className='skill-box'>
            <span className='title'>JAVASCRIPT</span>
            <div className='skill-bar'>
              <span className='skill-per javascript'>
                <span className='tooltip'>60%</span>
              </span> 
            </div>
         </div>
         <div className='skill-box'>
            <span className='title'>REACT JS</span>
            <div className='skill-bar'>
              <span className='skill-per reactjs'>
                <span className='tooltip'>70%</span>
              </span> 
            </div>
         </div>
         <div className='skill-box'>
            <span className='title'>NODE JS</span>
            <div className='skill-bar'>
              <span className='skill-per nodejs'>
                <span className='tooltip'>40%</span>
              </span> 
            </div>
         </div>
       </div>
       </div>
     </div>
    
     <div className=''> 
     <h1 className='text-4xl mt-12'>Education</h1>
     <h2 className='flex text-xl mt-4'><p className='mt-1 m-1'><BsWindow/></p>2018-2022</h2>
     <h2 className='text-xl'>Finolex Academy of Management and Technology(Mumbai University)</h2>
     <h2 className='text-xl'>B-TECH (Electronic Engineer)</h2>
     <h1></h1>
     </div>
      </div>
    </motion.div>
  )
}
