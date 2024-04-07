import React from 'react'


import contact_bg_image from '../assets/contact_bg_image.jpg'

const Contact = () => {
  return (
<>    <img className='w-full h-full' src={contact_bg_image} alt="" />
    <div className='flex justify-between mt-[80px] pl-12 pr-12 md:gap-6'>
    <div>
      


<div>

<h2 className='text-2xl font-bold mb-4'>
    We Would Love To hear from you.

</h2>

<p className='mb-4'>
    If you have any query or any type of suggestion, you can contact us here. We Would Love to hear from you
</p>


</div>

<div className=''>
    <input className='border-2 py-1  border-slate-500 pr-20 mr-20' type="text" placeholder='Name'/>

    <input className='border-2 py-1 border-slate-500 pr-20' type="email" placeholder='E-mail' />
<div className='flex flex-col mt-3'>
    
<input className='border-2 py-2 border-slate-500' type="text" placeholder='Message' />
<button className='bg-blue-600  border-2 border-slate-400 text-white py-2 rounded-md w-[150px] mt-4 mb-2 h-12'>SEND MESSAGE</button>
</div>

</div>
  

 





    </div>

<div>
<p>
    <h3 className='text-xl font-bold mb-2'>Visit Us</h3>
    <div>
       <p> Industry House,Indore,India</p>
        <p>phone: +917089085881
        </p>
    </div>

    <h3 className='text-xl font-bold mt-3 mb-3'>Get In Touch</h3>
    <div >
       <p> You can get in touch with us on this provided email</p>
        <p>Email: ezMart@gmail.com
        </p>
    </div>


  </p>
</div>
</div>
</>

)
}

export default Contact

