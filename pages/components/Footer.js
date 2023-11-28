import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className='bg-black text-white mt-5 p'>
                <div className=' flex flex-row'>
                    <div className='md:w-1/3 w-1/2 p-2'>
                        <p className='text-xl font-semibold'>About Tally Solutions</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odio natus est doloribus fugiat hic architecto, ratione enim laborum ullam nulla similique temporibus repudiandae dolorum obcaecati! Itaque provident vitae quod.</p>
                        <div className='flex flex-col text-2xl gap-5 text-red-500 pt-5'>
                            <a target='_blank' href="mailto:tallyproducts@gmail.com?subject=hello this is sandeep" className='flex flex-row gap-1 translate  hover:animate-bounce' >
                                <span><IoMailOpenOutline/></span><span className='md:text-lg text-sm text-white'> tallyproducts@gmail.com</span>
                            </a>
                            <a target='_blank' href="tel:9582927928" className='flex flex-row gap-1 translate  hover:animate-bounce'><FaPhoneAlt /><span className='md:text-lg text-sm text-white'> +91 9582827928 </span></a>
                        </div>
                        <div className='flex flex-row gap-5 ml-20 md:ml-1 w-full text-2xl justify-center items-center pt-5 text-blue-500'>
                            <a target='_blank' href="https://www.facebook.com/TallySolution" className='translate  hover:animate-bounce '><FaFacebookF /></a>
                            <a target='_blank' href="https://www.pinterest.com/tallysoftware/" className='translate  hover:animate-bounce text-red-500'><FaPinterest /></a>
                            <a target='_blank' href="https://twitter.com/TALLYSOLUTION" className='translate  hover:animate-bounce'><FaTwitter /></a>
                            <a target='_blank' href="https://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7?_l=en_US" className='translate  hover:animate-bounce'><FaLinkedinIn /></a>
                        </div>
                    </div>
                    <div className='md:w-1/3 w-1/2 p-2 md:pl-20'>
                        <p className='text-xl font-semibold pb-2'>Quick Links</p>
                        <div className='flex flex-col '>
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Site Map</a>
                            <a href="">Placement</a>
                            <a href="">Product</a>
                            <a href="">Disclaimer</a>
                        </div>
                    </div>
                    <div className='w-1/3 p-2 hidden md:flex md:flex-col'>
                        <p className='text-center text-xl font-semibold'>Connect with Us </p>
                        <div className='flex flex-col gap-5 border-2 border-blue-600 p-5 m-2'>
                            <input className='bg-black border-b p-2' type="text" placeholder='First Name' />
                            <input className='bg-black border-b p-2' type="number" name="" id="" placeholder='Mobile No.' />
                            <input className='bg-black border-b p-2' type="email" name="" id="" placeholder='Email' />
                            <input className='bg-black border-b p-2' type="text" placeholder='City' />
                            <input className='bg-black border-b p-2' type="text" name="" id="" placeholder='Message' />

                        </div>

                    </div>
                </div>

                <div className='w-full p-1 md:hidden'>
                        <p className='text-center text-xl font-semibold'>Connect with Us </p>
                        <div className='flex flex-col gap-5 border-2 border-blue-600 p-5 m-2'>
                            <input className='bg-black border-b p-2' type="text" placeholder='First Name' />
                            <input className='bg-black border-b p-2' type="number" name="" id="" placeholder='Mobile No.' />
                            <input className='bg-black border-b p-2' type="email" name="" id="" placeholder='Email' />
                            <input className='bg-black border-b p-2' type="text" placeholder='City' />
                            <input className='bg-black border-b p-2' type="text" name="" id="" placeholder='Message' />
                            <div className='flex items-center justify-center'><button className=' bg-blue-600 w-fit p-1 md:p-2 rounded-lg text-lg '>Send Messages</button></div>

                        </div>

                    </div>

                <div className='flex flex-row justify-between'>
                    <div className='w-1/2 flex flex-col p-2 gap-5'>
                   

                        <div>
                            <p className='text-xl font-semibold'>Solution</p>
                            <div className='flex flex-col gap-2'>
                                <a href="">Vertical Solutions For Tally.ERP 9</a>
                                <a href="">Customization Solutions</a>
                                <a href="">Tally Ready Invoice Customization</a>
                                <a href="">Tally Add-On Modules</a>
                                <a href="">Tally Integration</a>
                                <a href="">Tally Integration</a>
                                <a href="">Custom Built Solution
                                </a>
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <p className='text-xl font-semibold '>Company</p>
                            <a href="">GLOWIPS Team</a>
                            <a href="">Our Associates</a>
                            <a href="">Featured Projects</a>
                            <a href="">Our Esteemed Clientage</a>
                        </div>
                        <div className=' flex flex-col'>
                            <p className='text-xl font-semibold '>Download</p>
                            <a href="">Tally Downloads</a>
                            <a href="">Instant Support</a>
                        </div>

                    </div>
                    <div className='w-1/2 flex flex-col justify-start items-end p-2'>  
                        <div className='flex flex-col gap-2'>
                        <p className='text-xl font-semibold'>Services</p>
                            <a href="">Tally Academy</a>
                            <a href="">Tally Training At Site</a>
                            <a href="">Tally Training At Academy</a>
                            <a href="">Priority Tally Support</a>
                            <a href="">Tally Data Recovery
</a>
                            <a href="">Tally Password Recovery</a>
                            <a href="">Data Migration
</a>
                            <a href="">Implementation Service</a>
                            <a href="">Incremental Implementation</a>
                            <a href="">Target Implementation</a>
                            <a href="">Customization Service</a>
                            <a href="">Invoice Customization</a>
                            <a href="">Module Customization</a>
                            <a href="">Dedicated Customization</a>
                            <a href="">Tally Corporate Training</a>
                            <a href="">Annual Support Cover</a>
                            <a href="">Tally .Net Subscription</a>
                            <a href="">Synchronization Implementation</a>
                            <a href="">Business Advisory Services</a>
                            <a href="">Placement</a>
                        </div>

                       
                    </div>

                </div>
            </div>
            <div className='bg-blue-500 text-white p-5 text-center text-lg'>
                <p>Copyright 2023 Tally Solutions Design by <a href="" className='underline'>Codemix technologies</a> | All Rights Reserved</p>

            </div>
        </>

    )
}

export default Footer
