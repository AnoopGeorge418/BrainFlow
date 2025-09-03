import React from 'react'
import Redirector from '../components/Redirector'

function Apps() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-[#908e8e88] flex-col'>

      {/* Get back button */}
      <Redirector to={"/"} className='absolute top-10 left-10 w-10 h-10 cursor-pointer group'>
        <img src="/getBack.png" alt="get back to landing page" className='w-[30px] h-[30px] object-contain' />
        <span className='absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 w-[5rem] font-[alice]'>Go Back</span>
      </Redirector>

      {/* Heading */}
      <h1 className='sm:text-[42px] text-[24px] font-bold text-center font-[alice]'>Get BrainFlow Anywhere — Desktop, Mobile, or <br />
          In your web. Let’s Get Started!</h1>
      
      {/* CTA buttons */}
      <div className='sm:space-x-7 sm:space-y-6 flex sm:flex-row flex-col'>
          <Redirector to="#" className='border-1 p-2 sm:w-[210px] w-[280px] h-[3.5rem] rounded-[10px] mt-5 cursor-pointer bg-[#96ac9622] hover:bg-[darkgray] hover:text-white flex justify-center items-center text-center space-x-3 flex-col hover:border-3 hover:border-black font-[alice]'>
            <img src="/mobile.png" alt="mobile app" />
            Get Mobile App
          </Redirector>
          <Redirector to="#" className='border-1 p-2 sm:w-[210px] w-[280px] h-[4rem] rounded-[10px] mt-3 cursor-pointer bg-[#96ac9622] hover:bg-[darkgray] hover:text-white flex justify-center items-center text-center space-x-3 flex-col hover:border-3 hover:border-black font-[alice]'>
            <img src="/desktop.png" alt="desktop app" />
            Get Desktop App
          </Redirector>
          <Redirector to="#" className='border-1 p-2 sm:w-[210px] w-[280px] h-[4rem] rounded-[10px] mt-3 cursor-pointer bg-[#96ac9622] hover:bg-[darkgray] hover:text-white flex justify-center items-center text-center space-x-3 flex-col hover:border-3 hover:border-black font-[alice]'>
            <img src="/browser.png" alt="web browser app" />
            Try in Browser
          </Redirector>
      </div>
    </div>
  )
}

export default Apps
