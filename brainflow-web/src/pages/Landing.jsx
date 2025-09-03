import React, { useState } from 'react'
import Navbar from '../layout/Navbar'
import GetBrainFlowApps from '../components/GetBrainFlowApps'
import Footer from '../layout/Footer'
import Redirector from '../components/Redirector';

function Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Loading Navbar */}
            <Navbar isOpen = {isMenuOpen} setIsOpen={setIsMenuOpen}/> 

            {/* Hero Section */}
            <div className='flex flex-col flex-1 justify-center items-center text-center px-4 sm:px-6'>
                <h1 className='sm:text-[50px] text-[32px] font-bold leading-tight font-[alice]'>Focus Smarter. Grow Faster. Flow Always <br /> where clarity meets consistency for lasting success.</h1>
                
                <p className='mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug max-w-3xl font-[alice]'>Brainflow helps you cut distractions, build habits, and stay <br /> in the zone — so growth feels natural, not forced.</p>
                
                <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                    <Redirector
                        to="/Login" className='px-5 py-2 border-2 border-white rounded-[10px] w-full sm:w-[160px] text-center cursor-pointer bg-[#074f85] text-white hover:bg-[#4C93C9] hover:text-white'>
                            Get Started
                    </Redirector>
                    <GetBrainFlowApps/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing
