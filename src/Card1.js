
function Card1(props) {
  return (
    <div className=" ">
         <img className='p-2 opacity-40 hover:opacity-100' src={props.Img}   alt="" />
         <div className=" block mx-auto mt-6">
         <a href={props.link}><button className="p-2 px-4 border-2 border-black text-black  rounded-full ">live Demo</button></a>
         <a href={props.Slink}><button className="p-2 px-4 border-2 border-black text-black  rounded-full ml-2">Source Code</button></a>
         </div>
    </div>
  )
}

export default Card1