
import {motion} from 'framer-motion'
export default function Components() {
  return (

    <motion.div
    //  initial={{opacity:0}} animate={{opacity:1.5}} 
    // transition={{delay:2 ,duration:2 ,type:'spring',stiffness:20}} 
  
    className="a10">
      <motion.h1   initial={{fontSize:20}} animate={{fontSize:50, color:'#ff2992'}} whileHover={{x:12,textShadow:"0px 0px 8px rgb(255,255,255)" }}>Components</motion.h1>
      <motion.p initial={{scale:0.7}} animate={{scale:1}} transition={{type:'spring',stiffness:120}} whileHover={{x:12}}>Lorem ipsum dolor sit amet conse:0ctetur adipisicing elit. Quibusdam eum quos illum consectetur dicta totam cum, reiciendis earum rerum hic minus commodi ,illo facilis ipsum, et architecto nulla ipsa placeat.</motion.p>
      <motion.button  initial={{x:-250}}
      animate={{scale:1,x:-10}} 
      transition={{type:'spring', stiffness:120}}
      whileHover={{scale:1.1, textShadow:"0px 0px 8px rgb(255,255,255)" ,boxShadow:"0px 0px 8px rgb(255,255,255)"}}
      className="a11">Hello</motion.button>
    </motion.div>
    
  )
}
