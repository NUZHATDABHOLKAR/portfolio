import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w7cnwjb', 'template_6a2ozzj', form.current, 'Pcy63f90Ajqyqtu2w')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          alert("message has sent")
      }, (error) => {
          console.log(error.text);
          alert("maybe you did something wrong please solve that problem")
      });
  };

    return (
      <div className="About bg-red-50"> 
      <div className='mt-80 md:mt-56 lg:mt-24'>  
      <form ref={form} onSubmit={sendEmail} className='flex flex-col p-20 lg:px-96'>
      <label  className='text-rose-900 text-2xl p-2'>Name</label>
      <input type="text" name="from_name" />
      <label className=' text-rose-900 text-2xl p-2'>Email</label>
      <input type="email" name="from_email" />
      <label className=' text-rose-900 text-2xl p-2'>Message</label>
      <textarea name="message" rows="8"
          placeholder="how can i help you" />
      <input type="submit" value="Send" className='rounded-full border-2 border-rose-900 mx-auto px-6 p-2 mt-4 text-rose-900'/>
    </form>
   </div>
</div>
    )
  }

