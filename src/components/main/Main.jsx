import React, { useContext } from 'react'
import Promptbar from './Promptbar'
import { Context } from '../../context/Context'

const Main = () => {
  const {onSent,setprompt,prompt,results,prevprompts,showresult,recentprompt,loading} = useContext(Context)
  return (
    <div className='flex flex-col bg-[#1E1F20] overflow-hidden items-center justify-between h-full w-full'>
    <div className='h-12 w-full p-8 flex justify-end items-center'>

      <div className='relative w-9 h-9'>
        <img src="/jobs.jpg" className='absolute top-0 left-0 w-full h-full rounded-full object-cover' />
      </div>
    </div>

   {
    !showresult&&(
      <div className='flex items-center justify-center'>
      <h1 className={`gradient-text text-center`}> Hello, Shakir Sajad</h1>
   </div>
    )}


  

{showresult&&<div className='w-full mt-8 h-screen overflow-y-scroll flex flex-col scrollbar-hide items-start justify-start'>

  <div className='flex pl-[30px] sm:pl-[30px] md:pl-[60px] lg:pl-[130px] xl:pl-[180px] gap-8 flex-col items-start  justify-start w-full'>
  
  <div className='flex items-center justify-center gap-2'>
    <img src="/jobs.jpg" className='w-10 h-10 rounded-full object-cover'/>
    <h2 className='text-white'>{recentprompt}</h2>
  </div>

  <div className='flex items-center w-full justify-start  gap-6'>
    <img src="/favi.png" className={`w-10 ${loading?"mb-24":"mb-10"} h-10 rounded-full object-cover`}/>
    {loading?(
      <div className='flex flex-col gap-3 w-full anime pr-12'>
         <hr className='w-full h-6  rounded-sm'/>
       <hr className='w-full  h-6  rounded-sm'/>
       <hr className='w-full  h-6   rounded-sm'/>
       
      </div>
    ):<h2 className='text-white' dangerouslySetInnerHTML={{__html:results}}></h2>}
  </div>
  </div>
  
</div>
}

     
   

    <div className='p-8 flex items-center w-full justify-center'>
      <Promptbar setprompt={setprompt} prompt={prompt} onSent={onSent}></Promptbar>
    </div>

    </div>
  )
}

export default Main
