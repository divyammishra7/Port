import React, { useState } from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
    const [flag,setFlag]=useState(false);
    const handleClick=()=>{
        setFlag(!flag);
        



    }
  return (
 <nav className='py-2 md:py-2  flex flex-col   z-50 bg-[#0B1224] md:flex-row sticky top-0'  >
    <div className='brand flex  flex-row w-full justify-between md:w-40 '>
        <div className='flex flex-col'>
    <h1 className='text-[#72E2AE] text-3xl font-bold ml-2 w-80 rock-salt'>DIVYAM</h1>
    <h1 class="text-4xl rock-salt text-white mishra">
              Mishra
            </h1>
            </div>
    <div className='icon md:hidden sticky '>
<GiHamburgerMenu className='bg-[#72e2ae] text-2xl  mt-1 mr-4 rounded-sm iconfont' onClick={handleClick}></GiHamburgerMenu>
</div>
    </div>
    <div className='nav-links md:block hidden  mx-auto' id="link">
    <ul className=' flex flex-row  items-center'>
        <li className='text-[#72E2AE] text-center mr-7 font-bold py-2 '>
            1. Home
        </li>
        <li className='text-[#72E2AE]  mr-7 font-bold text-center  py-2 '>
            2. About
        </li>
        <li className='text-[#72E2AE] mr-7  font-bold text-center py-2 '>
           3. Works
        </li>
        <li className='text-[#72E2AE] mr-7 font-bold text-center  py-2 ' >
            4. Contact
        </li>
        <li className='text-[#72E2AE] mr-7 font-bold text-center py-2 '>
           5. Resume
        </li>
    </ul>
</div>
<button className='text-black bg-[#72E2AE] rounded-sm  mr-5  h-10 px-4 hidden md:block'> HIRE ME </button>
 {flag &&<div className='nav-links bg-[rgb(0,6,26)] md:hidden ' id="link">
    <ul>
        <li className='text-[#72E2AE] text-center py-2'>
            Home
        </li>
        <li className='text-[#72E2AE] text-center  py-2'>
            About
        </li>
        <li className='text-[#72E2AE] text-center py-2'>
            Works
        </li>
        <li className='text-[#72E2AE] text-center  py-2'>
            Contact
        </li>
    </ul>
</div>}

 </nav>
  )
}

export default Navbar