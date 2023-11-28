import React from 'react'

const Section2 = () => {
    return (
        <>
           <div className='flex flex-row items-center justify-center'>
           <div className='grid grid-cols-2 md:flex md:flex-row justify-center md:w-1/2  text-lg font-semibold text-white gap-5 '>
                <a href="" className='p-2 bg-blue-600 w-full rounded-md text-center hover:bg-red-500 h-fit'>Quotations</a>
                <a href="" className='p-2 bg-blue-600 w-full text-center rounded-md hover:bg-red-500 h-fit'>More</a>
                <a href="" className='p-2 bg-blue-600 w-full text-center rounded-md hover:bg-red-500 h-fit' >Buy Offline</a>
                <a href="" className='p-2 bg-blue-600 w-full text-center rounded-md hover:bg-red-500 h-fit md:w-fit'>Brochure</a>
                <a href="" className='p-2 bg-blue-600 w-full text-center rounded-md hover:bg-red-500 h-fit md:w-fit'>Migrate</a>
            </div>
           </div>
        </>
    )
}

export default Section2
