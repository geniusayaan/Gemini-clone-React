import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
const Prompts = () => {
    const prompts = ["use query narrated","MERN stack chat-app","Implementing socket.io","Twitter clone","hey gemini","youutbe video making","lens card "]
  return (
    <div   className='w-full   flex flex-col  items-start text-white justify-start h-[80%] overflow-y-scroll custom-scrollbar overflow-x-hidden pr-4'>
      <ul className='flex flex-col gap-2'>
  {prompts.map((prompt, i) => (
    <li key={`prompt-${i}`} className='flex justify-center overflow-hidden items-center text-white mt-2 p-2 rounded-md'>
      <FiMessageSquare className='mt-2 mr-2' />
      <span className='w-56 overflow-hidden select-none'>
        {prompt.slice(0, 15)}
        {prompt.length > 15 && "..."}
      </span>
    </li>
  ))}
</ul>

    </div>
  )
}

export default Prompts
