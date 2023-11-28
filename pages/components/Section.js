import React from 'react'
import Image from 'next/image'


const Section = () => {
  return (
   <>
    <div className='flex flex-col bg-[url("/08.jpg")] w-cover h-fit justify-center items-center bg-no-repeat'>
        <div className='flex flex-col w-screen h-fit pt-40'>
            <p className='md:text-6xl text-4xl text-center font-bold'>About Tally Solution Unit</p>
            <div className='flex flex-row bg-white w-fit p-2 gap-3 items-center font-bold'>
                <a href="">Home</a>
                <span className='text-xl text-center'>/</span>
                <a href="" className='text-blue-600'>About Us</a>
            </div>
        </div>
     
    </div>
   <div className='bg-fuchsia-500 text-4xl md:text-8xl font-semibold p-2'>
   <marquee behavior="" direction="">"Tally Software Dealers And Solution Provides - Across New Delhi - NCR - Gurgaon -Noida"</marquee>
   </div>
   </>
  )
}

export default Section
