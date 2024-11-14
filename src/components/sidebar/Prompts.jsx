import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
const Prompts = () => {
    const prompts = ["use query narrated","MERN stack chat-app","Implementing socket.io","Twitter clone","hey gemini","youutbe video making","lens card "]
  return (
    <div className='w-full  flex flex-col  items-start text-white justify-start h-[80%] overflow-y-scroll overflow-x-hidden p-2'>
      {
        prompts.map(prompt=>(
            <>
            <ul key={prompt} className='flex flex-col gap-2'>
              <div className='flex justify-center overflow-hidden items-center text-white  mt-2 p-2 rounded-md'>
            <FiMessageSquare className='mt-2 mr-2' />  <li key={prompt} className='w-56 overflow-hidden select-none'>{prompt.slice(0,17)}{prompt.length>15&&"..."}</li>
            </div>
            </ul>
            </>
        ))
      }
    </div>
  )
}

export default Prompts
