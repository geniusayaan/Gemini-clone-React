import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";



const Promptbar = (props) => {
 const {prompt,setprompt,onSent}= props
 
  return (
   
      <div className='flex items-center justify-center'>
        <form onSubmit={(e)=>{
          e.preventDefault()
          onSent(prompt)}}>
        <label className='relative'>
      <input type="text" className='outline-none text-[15px] pl-5 p-[18px] w-[720px] rounded-full bg-[#333537] text-white' placeholder='Ask Gemini' value={prompt} onChange={(e)=>setprompt(e.target.value)}/>



      <button className='absolute top-0 right-4 center h-full'><IoIosSend className='text-white text-2xl'/>
      </button>

      </label>
      </form>
   
      </div>
    
  )
}

export default Promptbar
