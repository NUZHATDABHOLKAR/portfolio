import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Projects from './Projects'
import { Routes,Route,useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
function Animated() {
 const location=useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Services' element={<Services/>} />
        <Route path='Projects' element={<Projects/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default Animated