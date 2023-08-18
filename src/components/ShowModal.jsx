import React from 'react'

const ShowModal = ({ setIsOpen }) => {
    return (
        <div className='fixed inset-0  flex justify-center items-center wrap'>
            <div className='bg-white w-4/5 md:w-1/2 h-auto p-4 '>
                <div className='flex justify-between w-full '>
                    <p className='text-xl md:text-3xl text-center w-full text-blue-600'>Register here</p>
                    <button className='text-base md:text-2xl' onClick={() => { setIsOpen(false) }}>&#x2715;</button>
                </div>
                <form className='flex flex-col justify-evenly items-center w-full h-[300px]'>
                    <input className='outline-none border-b border-gray-300 p-1 w-full text-base md:text-lg' type='text' placeholder='Enter name' />
                    <input className='outline-none border-b border-gray-300 p-1 w-full text-base md:text-lg' type='text' placeholder='Enter village' />
                    <input className='outline-none border-b border-gray-300 p-1 w-full text-base md:text-lg' type='text' placeholder='Enter city' />
                    <input className='outline-none border-b border-gray-300 p-1 w-full text-base md:text-lg' type='text' placeholder='Enter aadhaar' />
                    <button className='bg-blue-500 hover:bg-blue-600 text-white w-1/2 md:w-2/6 p-2 rounded-sm md:rounded-lg text-sm md:text-base' type='submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default ShowModal