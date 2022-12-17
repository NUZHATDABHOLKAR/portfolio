import {motion} from 'framer-motion'
import Card from './Card'
export default function Services() {
    return (
      <div   className='About bg-red-50'>
      <div className='mt-80 md:mt-56 lg:mt-24'>  
      <h1 className='heading1'>Services</h1>
      <hr className='line'/> 
      <div className=' flex flex-col mt-12  lg:flex-row '>
      <motion.div  className='mt-4 mx-auto lg:mt-0' whileHover={{scale:1.1}} ><Card  Img='https://portfolio34.netlify.app/images/001-laptop.png'  name='web development' detail='I can design a responsive website for you by using HTML, CSS, Tailwind css, React js, and JavaScript Programming Language'/></motion.div>
      <motion.div  className='mt-4 mx-auto lg:mt-0' whileHover={{scale:1.1}} ><Card  Img='https://portfolio34.netlify.app/images/003-responsive.png'  name='Responsive Design' detail='I can design a 100% responsive website for you with all devices, Tablets, and Browsers.'/></motion.div>
      <motion.div  className='mt-4 mx-auto lg:mt-0' whileHover={{scale:1.1}} ><Card  Img='https://portfolio34.netlify.app/images/004-web-design.png'  name='Creative Design' detail='I can Edit your current website. Like changing the color or even adding a new content to make it seem better.'/></motion.div>
      </div>

      <div className=' flex flex-col  justify-around  lg:flex-row mt-12 '>
      <motion.div className='mt-4 mx-auto lg:mt-0' whileHover={{scale:1.1}} ><Card  Img='https://portfolio34.netlify.app/images/001-lamp.png'  name='Web Idea' detail='I can turn your ideas to a real projects with high quality. Beside that i will give you  ideas to make your website much better'/></motion.div>
      <motion.div className='mt-4 mx-auto lg:mt-0'  whileHover={{scale:1.1}} ><Card  Img='https://portfolio34.netlify.app/images/005-help.png'  name='Support' detail='Support is available if you wanna make any changes for your website.'/></motion.div>
      </div>
      </div>
      </div>
    )
  }
