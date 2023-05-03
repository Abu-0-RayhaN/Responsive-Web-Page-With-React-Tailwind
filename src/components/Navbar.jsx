// import {useState} from 'react'
import { logo} from '../assets';
import { navLinks} from '../constants'
const Navbar = () => {
  // const [toggle,setToggle]=useState(false);
  return (
    <div className='w-full flex py-6 justify-between items-center navbar text-white'>
      <img src={logo} alt="boobank" className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1? 'mr-0': 'mr-10'}`}>
              <a href={`#${nav.id}`} className='text-white'>
                {nav.title}
              </a>
            </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* <img src={} alt="" /> */}
      </div>
    </div>
  )
}

export default Navbar
