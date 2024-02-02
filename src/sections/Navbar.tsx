import { useState } from 'react';
import Drawer from '../components/Drawer';
import { FiX, FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
    <Drawer
    isOpen={drawerOpen}
    duration={0.4}
    closeFunction={() => setDrawerOpen(false)}
    >
      <nav className='flex flex-col w-3/4 h-full bg-white text-black'>
        <button
        onClick={() => setDrawerOpen(false)}
        className='w-min p-5 hover:text-red-600 transition duration-200 text-xl text-right'
        >
          <FiX />
        </button>
        <a href="#" className='p-5'>Blog</a>
        <a href="#" className='p-5'>About Us</a>
      </nav>
    </Drawer>
    <header className='px-3 sm:px-10 py-3 flex justify-between items-center'>
      <div className='flex items-center gap-5'>
        <img src="/logo_light.png" className='w-16' />
        <h1 className='hidden sm:block text-xl md:text-3xl'>Lumina Labs</h1>
      </div>
      <a href="#" className='btn cta sm:scale-100 scale-75'>SHOP NOW</a>
      <nav className='gap-5 hidden md:flex'>
        <a href="#">Blog</a>
        <a href="#">About Us</a>
      </nav>
      <button
      onClick={() => setDrawerOpen(true)}
      className='btn cta block md:hidden'
      >
        <FiAlignRight />
      </button>
    </header>
    </>
  )
}
 
export default Navbar;