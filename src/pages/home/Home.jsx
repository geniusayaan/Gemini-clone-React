import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'



const Home = () => {
  return (
    <div className='flex items-center w-screen  h-screen'>
    <Sidebar></Sidebar>
    <Main></Main>
    </div>
  )
}

export default Home
