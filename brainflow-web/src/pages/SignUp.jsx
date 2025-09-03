import React from 'react'
import AppLogo from "../components/AppLogo.jsx"
import AppIcon from "../components/AppIcon.jsx"
import Redirector from "../components/Redirector.jsx"

function SignUp() {
  return (
    <div className='bg-linear-to-tr from-[#D9D9D9] to-[#C1C1C1] min-h-screen flex justify-center items-center'>
        <div className='w-full max-w-[70rem] rounded-2xl flex '>
          {/* Left Container */}
          <div className='flex-1 bg-linear-to-t from-[#747474] to-[#2C2C2C] h-[40rem] rounded-tl-2xl rounded-bl-2xl'>
            <div className='flex flex-row items-center p-8 space-x-1'>
              <AppIcon />
              <AppLogo />
            </div>
            <div className='text-white text-center flex flex-col justify-center items-center'>
              <h1 className='text-[38px] font-bold mt-22 font-[alice]'>Join BrainFlow and Take <br /> Control of Your Productvity </h1>
              <p className='text-[16px] mt-2 font-[alice]'>Create your account to unlock tailored practice, track your <br /> progress, and prepare with confidence for every interview.</p>
            </div>

            <div className='relative mt-40'>
              <div className="flex items-center w-full text-white ml-[20px]">
                <span className="mr-2 font-[alice]">Follow Us</span>
                <div className="flex-1 relative">
                  <div className="w-[27rem] h-[1px] bg-white"></div>
                  <div className="absolute right-12 top-1/2 -translate-y-1/2">
                    <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-white"></div>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-center items-center space-x-5'>
                <Redirector to={"#"} className='text-white flex flex-row font-[alice] items-center space-x-1 cursor-pointer'>
                    <img src="/Instagram.png" alt="link to instagram" className='w-4 h-4'/>
                    Instagram
                </Redirector>
                <Redirector to={"#"} className='text-white flex flex-row font-[alice] items-center space-x-1 cursor-pointer'>
                    <img src="/Facebook.png" alt="link to facebook" className='w-4 h-4'/>
                    Facebook
                </Redirector>
                <Redirector to={"#"} className='text-white flex flex-row font-[alice] items-center space-x-1 cursor-pointer'>
                    <img src="/Discord.png" alt="link to discord" className='w-4 h-4'/>
                    Discord
                </Redirector>
                <Redirector to={"#"} className='text-white flex flex-row font-[alice] items-center space-x-1 cursor-pointer'>
                    <img src="/Twitter.png" alt="link to twitter" className='w-4 h-4'/>
                    Twitter(X)
                </Redirector>
                <Redirector to={"#"} className='text-white flex flex-row font-[alice] items-center space-x-1 cursor-pointer'>
                    <img src="/Youtube.png" alt="link to youtube" className='w-4 h-4'/>
                    Youtube
                </Redirector>
              </div>
            </div>

          </div>

          {/* Right Container */}
          <div className='flex-1 bg-white h-[40rem] rounded-tr-2xl rounded-br-2xl text-black flex justify-center items-center flex-col'>
            <div className='mb-5'>
              <h1 className='font-[alice] text-[32px] font-bold'>Create Your BrainFlow Account!</h1>
              <p className='font-[alice] text-[15px] text-center'>Sign up now to kickstart your productivity journey—where consistent <br /> practice transforms ambition into unstoppable confidence.</p>
            </div>

            {/* forms */}
            <div> 
              <div className="flex flex-col justify-center items-start space-y-0 mb-3">
                <label htmlFor="firstname" className="font-medium text-gray-700 font-[alice]">
                  First Name
                </label>

                <div className="relative w-[30rem]">
                  {/* Icon */}
                  <img src="/user.png" alt="user icon"  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 " />
                  {/* Divider */}
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400">|</span>
              
                  {/* Input */}
                  <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname..." className="border p-2 pl-14 h-[3rem] rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-[alice]"/>
                </div>
              </div>

              {/* LastName */}
              <div className="flex flex-col justify-center items-start space-y-0">
                <label htmlFor="lastName" className="font-medium text-gray-700 font-[alice]">
                  Last Name
                </label>

                <div className="relative w-[30rem]">
                  {/* Icon */}
                  <img src="/user.png" alt="user icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 "/>
                  {/* Divider */}
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400">|</span>
              
                  {/* Input */}
                  <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname..." className="border p-2 pl-14 h-[3rem] rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-[alice]"/>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col justify-center items-start space-y-0 mt-3">
                <label htmlFor="email" className="font-medium text-gray-700 font-[alice]">
                  Email
                </label>

                <div className="relative w-[30rem]">
                  {/* Icon */}
                  <img src="/email.png" alt="user icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 "/>
                  {/* Divider */}
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400">|</span>
              
                  {/* Input */}
                  <input type="text" id="email" name="email" placeholder="Enter your email..." className="border p-2 pl-14 h-[3rem] rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-[alice]"/>
                </div>
              </div>

            </div>
            <p className='font-[alice] mt-2'>Already have an account? <Redirector to={"/Login"} className='text-blue-500 cursor-pointer'>Log In</Redirector></p>
            <button className='font-[alice] p-2 bg-gray-200 rounded-[10px] w-[10rem] h-[3rem] cursor-pointer hover:bg-gray-400 mt-3'>Verify Email</button>
            <p className='font-[alice] mt-2'>Or signup using</p>
            
            <div className='flex flex-row'>
              <button className='font-[alice] p-2 border rounded-[5px] ml-3 w-[9rem] mt-3 cursor-pointer flex flex-row justify-center items-center space-x-4'>
                <img src="/google.png" alt="google social login button" />
                  Google
              </button>
              <button className='font-[alice] p-2 border rounded-[5px] ml-3 w-[9rem] mt-3 cursor-pointer flex flex-row justify-center items-center space-x-4'>
                <img src="/linkedin.png" alt="linkedin social login button" />
                  Linkedin
              </button>
              <button className='font-[alice] p-2 border rounded-[5px] ml-3 w-[9rem] mt-3 cursor-pointer flex flex-row justify-center items-center space-x-4'>
                <img src="/github.png" alt="github social login button" />
                  Github
              </button>
            </div>

          </div>
        </div>
    </div>
  )
}

export default SignUp
