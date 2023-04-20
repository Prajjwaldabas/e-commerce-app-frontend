import React from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import "./Slider.scss"
import { useState } from 'react';

export default function Slider() {

const [currentSlide,setCurrentSlide]= useState(0);

    const data = [
"https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://pps.whatsapp.net/v/t61.24694-24/342282431_619975339643450_2153051617652791745_n.jpg?ccb=11-4&oh=01_AdRrL7GEejrXWq81iTvckU3nCcTq2jVMxRcDBZ1cA0_7Ew&oe=644E61D5"
    ]

    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev)=>prev-1)
    }
    const nextSlide=()=>{
   setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1);
    }



  return (
    <div className='slider'>

        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]}  alt="" />
        <img src={data[2]}  alt="" />

        </div>


<div className='icons'>
        <div className="icon" onClick={prevSlide}>
<WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
        </div>
    </div>
  )
}
