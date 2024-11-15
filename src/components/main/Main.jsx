import React, { useContext } from 'react'
import Promptbar from './Promptbar'
import { Context } from '../../context/context'

const Main = () => {
  const {onSent,setprompt,prompt,results,prevprompts,showresult,recentprompts} = useContext(Context)
  return (
    <div className='flex flex-col bg-[#1E1F20] items-center justify-between h-full w-full'>
    <div className='h-12 w-full p-8 flex justify-end items-center'>

      <div className='flex w-9 h-9'>
        <img src="/jobs.jpg" className='w-full h-full rounded-full object-cover' />
      </div>
    </div>

   {
    !showresult&&(
      <div className='flex items-center justify-center'>
      <h1 className='gradient-text'> Hello, Shakir Sajad</h1>
   </div>
    )}


   { showresult&& <div className='w-full mt-8 h-screen overflow-y-scroll  flex flex-col items-center justify-start'>
          {
            results.map(result=>(
              <div className='w-full flex flex-col items-center justify-center mt-7'>
             
              <div className='flex gap-2 items-center w-[60%] mb-3'>
              <img src="/jobs.jpg" className='w-9 h-9 rounded-full object-cover' />
              <h1 className='text-white text-lg'>{prevprompts}</h1>
            </div>
            <div className='text-white w-[70%] flex flex-col items-start  text-xl border-[#333] pl-[100px] rounded-lg'>
              {result}
            </div>
           
            </div>
            ))
          }
        </div>
}
     
   

    <div className='p-8 flex items-center w-full justify-center'>
      <Promptbar setprompt={setprompt} prompt={prompt} onSent={onSent}></Promptbar>
    </div>

    </div>
  )
}

export default Main
