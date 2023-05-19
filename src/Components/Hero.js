import React, { useState } from 'react'
import Logo from '../Assets/Logo.jpg'

import Typewriter from 'typewriter-effect';
import { SocialIcon } from 'react-social-icons';

function Hero() {
  const [flag1,setFlag1]=useState(true);
  const [flag2,setFlag2]=useState(true);
  const [flag3,setFlag3]=useState(true);
  const [flag4,setFlag4]=useState(true);
  const handleHover=()=>{
    setFlag1(!flag1);
   
  }
  const handleHover2=()=>{
    setFlag2(!flag2);
   
  }
  
  const handleHover3=()=>{
    setFlag3(!flag3);
   
  }
  
  const handleHover4=()=>{
    setFlag4(!flag4);
   
  }
  
  
  return (
    <div className='text-[#74e2ae] hero flex flex-col justify-center items-center md:mt-24 mt-32 '>
        <div className='flex justify-center items-center img-sec'>
        <img src={Logo} className='md:w-[37%] '></img>
        </div>
        <div className='info w-full flex flex-col items-center justify-center'>
            <h1 className='flex flex-row font-bold text-3xl md:text-5xl  text-center'> <span classname='text-white ok'  style={{color:'white'}}>Hi, I am </span> &nbsp;   <Typewriter className='text-[#74E2AE]'
  
  
  
  options={{
    strings: ['Divyam','WebDevloper', 'Programmer','Photographer'],
    autoStart: true,
    loop: true,
    
  }}

  
/></h1>
    <p className='info text-[#BFBECB] text-center mt-6 md:w-[44rem] text-xl'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
   <div className='socials mt-7  '>

   { flag1?<SocialIcon  classname='hh  ml-3' url='https://instagram.com/divyammishra7' fgColor='white' bgColor='#0F172A'onMouseEnter={handleHover}></SocialIcon>:<SocialIcon url='https://instagram.com/divyammishra7' classname='hh'  onMouseLeave={handleHover} fgColor='white' bgColor='#74e2ae'></SocialIcon>}
   { flag2?<SocialIcon  classname='hh  ml-3' url='https://facebook.com/divyammishra7' fgColor='white' bgColor='#0F172A'onMouseEnter={handleHover2}></SocialIcon>:<SocialIcon url='https://facebook.com/divyammishra7' classname='hh'  onMouseLeave={handleHover2} fgColor='white' bgColor='#74e2ae'></SocialIcon>}
   { flag3?<SocialIcon  classname='hh  ml-3' url='https://github.com/divyammishra7' fgColor='white' bgColor='#0F172A'onMouseEnter={handleHover3}></SocialIcon>:<SocialIcon url='https://github.com/divyammishra7' classname='hh'  onMouseLeave={handleHover3} fgColor='white' bgColor='#74e2ae'></SocialIcon>}
   { flag4?<SocialIcon  classname='hh  ml-3' url='https://linkedin.com/divyammishra7' fgColor='white' bgColor='#0F172A'onMouseEnter={handleHover4}></SocialIcon>:<SocialIcon url='https://linkedin.com/divyammishra7' classname='hh'  onMouseLeave={handleHover4} fgColor='white' bgColor='#74e2ae'></SocialIcon>}
   </div>
      
        </div>


    </div>
  )
}

export default Hero