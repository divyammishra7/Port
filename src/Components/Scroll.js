import React from 'react'
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown'

function Scroll() {
  return (
    <div className=' mt-32 md:mt-11 text-[#9697A4] text-center  flex flex-row items-center  justify-center tracking-wide text-sm'>
    <UseAnimations animation={arrowDown} className='arrow'></UseAnimations> <span className='ml-3'>SCROLL DOWN </span></div>
  )
}

export default Scroll