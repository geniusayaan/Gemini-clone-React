import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Prompts from './Prompts';

const Sidebar = () => {
  const [extend,setextend] = useState(false)
  return (
    <div className={`flex flex-col bg-[#333]  justify-between h-full p-3 ${!extend?"w-16":"w-56"} ${extend?"items-start":"items-center"}`}>

        

<div className='flex flex-col   items-start justify-between h-[23%]'>
          <div className=' p-3'>

      <IoMenu className='text-2xl  text-white cursor-pointer' onClick={()=>extend?setextend(false):setextend(true)}/>
      </div>

<div className='flex p-1  items-center justify-center'>
  <div className='relative cursor-pointer'>
      <IoIosAddCircle className='text-[40px] text-white opacity-[0.7] hover:opacity-[1] cursor-pointer absolute left-[0%]'></IoIosAddCircle>{extend&&<h1 className='bg-black pl-10 p-2 rounded-3xl  text-white'>Add chat</h1>}
      </div>
      </div>
      </div>
      

{extend&&(
      <div className=' p-2 h-[60%] flex justify-center text-white w-full items-center'>
        <Prompts></Prompts>
      </div>
)
}



      

      <div className='flex items-start p-2 flex-col gap-6'>

      <IoHelpCircleSharp className='text-2xl  text-white cursor-pointer'/>

      <IoSettingsOutline className='text-2xl  text-white cursor-pointer'/>
      </div>
    </div>
  )
}

export default Sidebar
