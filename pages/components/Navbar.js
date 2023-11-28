import React from 'react'
import Image from 'next/image'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";
const Navbar = () => {
    return (
        <>
            <div className='flex flex-col bg-yellow-400 p-2'>
                <p className='text-sm font-bold text-center'>ॐ साईं राम</p>
                <div className='flex flex-row text-2xl gap-5 md:justify-end justify-center md:pr-40'>
                    <a target='_blank' href="https://www.facebook.com/TallySolution" className='translate  hover:animate-bounce'><FaFacebookF /></a>
                    <a target='_blank' href="https://www.pinterest.com/tallysoftware/" className='translate  hover:animate-bounce'><FaPinterest /></a>
                    <a target='_blank' href="https://twitter.com/TALLYSOLUTION" className='translate  hover:animate-bounce'><FaTwitter /></a>
                    <a target='_blank' href="https://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7?_l=en_US" className='translate  hover:animate-bounce'><FaLinkedinIn /></a>
                    <div className='flex flex-row gap-5 md:hidden'>
                    <a target='_blank' href="mailto:tallyproducts@gmail.com?subject=hello this is sandeep" className='translate  hover:animate-bounce' >
                        <IoMailOpenOutline />
                    </a>
                    <a target='_blank' href="tel:9582927928" className='translate  hover:animate-bounce'><FaPhoneAlt /></a>
                    </div>
                </div>
                <div className='md:flex flex-row p-2 justify-between hidden'>
                    <div>
                        <Image src="/logo.gif" width="170" height="170"></Image>
                    </div>
                    <div>
                        <div>

                            <div className='flex flex-row w-full gap-5 justify-center '>
                                <Image className='w-[400px] mb-5' src="/1.png" width="200" height="100"></Image>

                                <Image className='h-12 mt-12' src="/tallyinternational.png" width="200" height="50"></Image>
                                <div className='flex flex-col'>
                                    <p className='text-lg'>Email Us</p>
                                    <a href="mailto:tallyproducts@gmail.com?subject=hello this is sandeep" className=' flex flex-row text-blue-600 font-semibold gap-1' >
                                        <span className='text-2xl items-center'><IoMailOpenOutline /></span>
                                        <span>tallyproducts@gmail.com</span></a>
                                </div>

                                <div className='flex flex-col'>
                                    <p className='text-lg'>Call Us</p>
                                    <a href="tel:9582927928" className='flex flex-row text-blue-600 font-semibold gap-1'><span className='text-xl items-center mt-1'><FaPhoneAlt /></span>+91 9582927928</a>
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-row gap-5 bg-white rounded-lg p-2 justify-center items-center w-full pl-5 pr-5 font-semibold'>
                            <a href="https://tallysolution.net/index.php" className='hover:text-red-500'>Home</a>
                            <a href="" className='hover:text-red-500'>Company +</a>
                            <a href="" className='hover:text-red-500'>Products +</a>
                            <a href="" className='hover:text-red-500'>Services +</a>
                            <a href="" className='hover:text-red-500'>Solution +</a>
                            <a href="" className='hover:text-red-500'>Download +</a>
                            <a href="" className='hover:text-red-500'>Contact Us</a>
                            <button className='bg-blue-600 rounded-md  text-white p-2 hover:bg-red-500'>Rapid Response Center</button>
                            <button className='bg-blue-600 rounded-md text-white p-2 hover:bg-red-500'>Buy Tally</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar
