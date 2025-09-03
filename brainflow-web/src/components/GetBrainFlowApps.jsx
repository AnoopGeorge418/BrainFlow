import React from 'react'
import Redirector from "../components/Redirector.jsx"

function GetBrainFlowApps({ className }) {

  return (
    <div>
      <Redirector to="/Apps" className={`p-2 rounded-[10px] text-center cursor-pointer hover:bg-gray-300 border-1 hover:text-black ${className || 'sm:w-45 w-82'} font-[alice]`}>Get BrainFlow Apps</Redirector>
    </div>
  )
}

export default GetBrainFlowApps
