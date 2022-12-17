
function card(props) {
  return (
    <div className="p-2 border-2 border-red-100 max-w-md  box w-1/1 ml-auto lg:ml-12">
      <img className='mx-auto p-2' src={props.Img}   alt="" />
      <h5 className="text-xl p-4 text-center"> {props.name}</h5>
      <h5 className="text-center p-4 text-lg">{props.detail}</h5>
    </div>
  )
}

export default card