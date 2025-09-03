import { useState } from 'react';
import AppLogo from '../components/AppLogo';
import AppIcon from '../components/AppIcon';
import GetBrainFlowApps from '../components/GetBrainFlowApps';
import Redirector from '../components/Redirector';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClasses = "p-2 w-[100px] h-[40px] text-center rounded-[10px] bg-[#074f85] text-white hover:bg-[#4C93C9]";

  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-lg z-50'>
      <div className='flex justify-between items-center p-4 px-6'>
        {/* Logo */}
        <Redirector to={"/"} className='flex items-center space-x-2 cursor-pointer'>
          <AppIcon />
          <AppLogo />
        </Redirector>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4 items-center font-[alice]'>
          <Redirector to="/Login" className={buttonClasses}>
            Login
          </Redirector>
          <GetBrainFlowApps />
        </div>

        {/* Hamburger - mobile only */}
        <div className='md:hidden'>
          <img
            src="/hamburgerMenu.png"
            alt="menu"
            className='w-8 h-8 cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg p-4 flex flex-col space-y-2 font-[alice]'>
          <Redirector
            to="/Login"
            className={buttonClasses + " w-full"}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Redirector>
          <GetBrainFlowApps />
        </div>
      )}
    </div>
  );
}

export default Navbar;
