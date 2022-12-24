import React, { useState } from 'react';
import {SliderData} from './SliderData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
const Slider = () => {
    const [current,setCurrent]=useState(0)
    const length=SliderData.length
    const nextSlide=()=>{
       setCurrent(current===length-1? 0: current+1 )
    }
   const prevSlide=()=>{
    setCurrent(current===0? length-1 : current-1 )

   }
    return (
        <div>
            {SliderData.map((slide,ind)=><div key={ind} className='relative'> 
            <FontAwesomeIcon  onClick={prevSlide}
                className='text-4xl absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={100} icon={faCircleLeft} />
              {ind===current &&  <Image className='h-1/5vh' src={slide.image} width='1200' height='400'></Image>}
                <FontAwesomeIcon  onClick={nextSlide}
                className='text-4xl absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={100} icon={faCircleRight} />
            </div>)
            }
        </div>
    );
};

export default Slider;