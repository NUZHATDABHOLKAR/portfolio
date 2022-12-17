// import {motion} from 'framer-motion'
import Card1 from './Card1'
export default function Project() {
    return (
      <div className="About bg-red-50"> 
         <div className='mt-80 md:mt-72 lg:mt-24'>  
      {/* <h1 className='heading1'>Projects</h1>
      <hr className='line'/>  */}
      <h1 className='text-3xl'>ReactJS project</h1>
      <hr className='line'/> 
      <div className='flex flex-col justify-around lg:flex-row w-1/1'>
        <Card1 Img='./images/R1.png' link='https://menucard4.netlify.app' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/14RockPaperScissor'/>
        <Card1 Img='./imageS/R2.png' link='' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/12)Todo'/>
        
       </div>
      <h1 className='text-3xl mt-2'>javascript project</h1>
      <hr className='line'/>  
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/j1.png' link='https://nd-13-rpc.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/14RockPaperScissor'/>
        <Card1 Img='./images/j2.png' link='https://nd-11-todo.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/12)Todo'/>
        <Card1 Img='./images/j3.png' link='https://nd4calculator.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/Calculator'/>
       </div>
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/j4.png' link='https://nd-9-accordion.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/09Accordion'/>
        <Card1 Img='./images/j5.png' link='https://nd-8-qrgenerator.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/08QRCodeGenerator%20-%20API'/>
        <Card1 Img='./images/j6.png' link='https://nd-7-jokegenerator.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/javascript/tree/main/07JokesGenerator%20-%20API'/>
       </div>
       <h1 className='text-3xl mt-12'>Tailwind Css project</h1>
       <hr className='line'/>  
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/t1.png' link='https://project1p.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT-A'/>
        <Card1 Img='./images/t2.png' link='https://project2p.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT-B'/>
        <Card1 Img='./images/t3.png' link='https://travelagency12.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/travel-agency'/>
       </div>
       <h1 className='text-3xl mt-12'>HTML & CSS (Responsive)</h1>
       <hr className='line'/>  
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/h1.png' link='https://project15a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT15'/>
        <Card1 Img='./images/h2.png' link='https://project14a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT14'/>
        <Card1 Img='./images/h3.png' link='https://project13a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT13'/>
        </div> 
        <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/h4.png' link='https://project12a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT12'/>
        <Card1 Img='./images/h5.png' link='https://project11a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT11'/>
        <Card1 Img='./images/h6.png' link='https://project10ab.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT10'/>
       </div> 
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/h7.png' link='https://project9a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT9'/>
        <Card1 Img='./images/h8.png' link='https://project8a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT8'/>
        <Card1 Img='./images/h9.png' link='https://project7b.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT7'/>
       </div> 
       <h1 className='text-3xl mt-12'>HTML & CSS POSITION ( Non Responsive)</h1>
       <hr className='line'/>
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/c1.png' link='https://project6a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT6'/>
        <Card1 Img='./images/c2.png' link='https://project5a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT5'/>
        <Card1 Img='./images/c3.png' link='https://project4a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT4'/>
       </div> 
       <div className='flex flex-col justify-around lg:flex-row '>
        <Card1 Img='./images/c4.png' link='https://project3a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT3'/>
        <Card1 Img='./images/c5.png' link='https://project2ab.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT2'/>
        <Card1 Img='./images/c6.png' link='https://project1a.netlify.app/' Slink='https://github.com/NUZHATDABHOLKAR/PROJECT1'/>
       </div> 
      </div>
      </div>
    )
  }