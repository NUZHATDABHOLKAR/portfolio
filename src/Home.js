 import {motion} from 'framer-motion'
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
export default function homepage() {
  return (
      <motion.div initial={{width:0}} animate={{width:'100%'}} exit={{width:'100%'}}className="home bg-red-50">
        <div className='bg-red-50 mt-56 lg:mt-20'>
       <img className="img2" src="./images/img1.png" alt="" />
       <motion.h1 whileHover={{scale:1.9}} className="h1 text-black font-bold">NUZHAT DABHOLKAR</motion.h1>
       <motion.h1  whileHover={{scale:1.4}} className="h1 text-black font-bold">I'm a Frontend Web Developer</motion.h1>
       <div className="flex flex-row text-black lg:mx-auto  justify-center">
       <a  className="logos" href="https://www.linkedin.com/in/dabholkar-nuzhat-166069211/"><AiFillLinkedin size={36}/></a>
       <a  className="logos" href="https://github.com/NUZHATDABHOLKAR"><AiFillGithub size={36} /></a>
       <a href="https://www.instagram.com/nuzhatdabholkar579/"><FaInstagramSquare size={36}/></a>
       </div>
       </div>
       </motion.div>   
  )
}
