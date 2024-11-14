import React, { useState } from 'react'
import { Context } from '../../context/context'




const Promptbar = (props) => {
 const {prompt,setprompt,onSent}= props
 
  return (
    <div>
      <input type="text" className='outline-none text-[15px] pl-5 p-4 w-[700px] rounded-full bg-[#333537] text-white' placeholder='Ask Gemini' value={prompt} onChange={(e)=>setprompt(e.target.value)}/><button onClick={()=>onSent(prompt)}>sned</button>
    </div>
  )
}

export default Promptbar
