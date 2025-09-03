import React, { useState } from 'react'
import AppLogo from "../components/AppLogo.jsx"
import AppIcon from "../components/AppIcon.jsx"
import Redirector from "../components/Redirector.jsx"

function Login() {
  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

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
              <h1 className='text-[38px] font-bold mt-22 font-[alice]'>Brainflow helps you train smarter, track progress, and build unstoppable focus.</h1>
              <p className='text-[16px] mt-2 font-[alice]'>Log in to unlock tailored practice, boost productivity, <br /> and grow with confidence.</p>
            </div>

            <div className='relative mt-29'>
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
              <h1 className='font-[alice] text-[32px] font-bold'>Your Growth Awaits — Log In</h1>
              <p className='font-[alice] text-[15px] text-center'>Continue your journey where focused practice fuels productivity <br /> and builds unstoppable confidence.</p>
            </div>

            {/* Email */}
            <div> 
              <div className="flex flex-col justify-center items-start space-y-0 mb-3">
                <label htmlFor="email" className="font-medium text-gray-700 font-[alice]">
                  Email
                </label>

                <div className="relative w-[30rem]">
                  {/* Icon */}
                  <img src="/email.png" alt="email icon"  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 " />
                  {/* Divider */}
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400">|</span>
              
                  {/* Input */}
                  <input type="text" id="email" name="email" placeholder="Enter your email..." className="border p-2 pl-14 h-[3rem] rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-[alice]"/>
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col justify-center items-start space-y-0">
                <label htmlFor="password" className="font-medium text-gray-700 font-[alice]">
                  Password
                </label>

                <div className="relative w-[30rem]">
                  {/* Icon */}
                  <img src="/password.png" alt="password icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 "/>
                  <img src="/eye.png" alt="password icon" className="absolute right-[1rem] top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"/>
                  {/* Divider */}
                  <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400">|</span>
              
                  {/* Input */}
                  <input type="text" id="password" name="password" placeholder="Enter your password..." className="border p-2 pl-14 h-[3rem] rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-[alice]"/>
                </div>
              </div>

            </div>
            <p className='font-[alice] mt-2'>Don't have an account? <Redirector to={"/SignUp"} className='text-blue-500 cursor-pointer'>Sign Up</Redirector></p>
            <button className='font-[alice] p-2 bg-gray-200 rounded-[10px] w-[10rem] h-[3rem] cursor-pointer hover:bg-gray-400 mt-3'>Log In</button>
            <p className='font-[alice] mt-2'>Or login using</p>
            
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

export default Login
