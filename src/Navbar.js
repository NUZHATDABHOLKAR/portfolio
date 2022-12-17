import {Link} from "react-router-dom"
import './index.css'
import {motion} from "framer-motion" 
import { MdHome,MdPerson,MdMailOutline,MdStorage, MdBadge,MdOutlineMenu} from "react-icons/md";

export const Navbar = () => {

  return (
    <>
    <nav className="navbar fixed w-full flex flex-col justify-center bg-red-50 text-emerald-600 lg:flex-row">
    <motion.h1 initaial={{x:-40,scale:1.3}} whileHover={{x:10}} ><img src="./images/img2.png" alt="" className="svg1  block mx-auto lg:ml-7  "/></motion.h1>
    <div className="nav flex-col lg:flex-row  justify-center">
    <motion.div className="block mx-auto text-black py-2 text-2xl lg:ml-7 text-xl " whileHover={{scale:1.1}} layoutId="underline"><Link to='/'  className="nav1"><MdHome className="img1"/>Home</Link></motion.div>
    <motion.div className="block mx-auto text-black py-2 text-2xl lg:ml-7 text-xl " whileHover={{scale:1.1}} layoutId="underline"><Link to='/About'  className="nav1"><MdPerson className="img1"/>About</Link></motion.div>
    <motion.div className="block mx-auto text-black py-2 text-2xl lg:ml-7 text-xl " whileHover={{scale:1.1}} layoutId="underline"><Link to='/Services'  className="nav1"><MdStorage className="img1"/>Services</Link></motion.div>
    <motion.div className="block mx-auto text-black py-2 text-2xl lg:ml-7 text-xl " whileHover={{scale:1.1}} layoutId="underline"><Link to='/Projects'  className="nav1"><MdBadge className="img1"/>Projects</Link></motion.div>
    <motion.div className="block mx-auto text-black py-2 text-2xl lg:ml-7 text-xl " whileHover={{scale:1.1}} layoutId="underline"><Link to='/Contact' className="nav1"><MdMailOutline className="img1"/>Contact</Link></motion.div>
    </div>
    </nav>
    </>
  )
}
