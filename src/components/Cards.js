import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook,faGraduationCap, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Cards = () => {
  return (
    <div className='w-full h-auto flex flex-wrap flex-col items-center'>
        <div className='w-full flex flex-wrap justify-evenly'>
            <div className=' w-46  flex flex-col items-center mb-9' >
                <FontAwesomeIcon icon={faBook} className='w-20 h-20 md:w-32 md:h-32 text-yellow-600' />
                <p className='text-2xl md:text-3xl font-bold text-white'>100+</p>
                <p className='text-2xl md:text-3xl font-bold text-gray-500'>Different Courses</p>
            </div>
            <div className=' w-46  flex flex-col items-center mb-9' >
                <FontAwesomeIcon icon={faGraduationCap} className='w-20 h-20 md:w-32 md:h-32 text-yellow-600' />
                <p className='text-2xl md:text-3xl font-bold text-white'>2000+</p>
                <p className='text-2xl md:text-3xl font-bold text-gray-500'>Students Enrolled</p>
            </div>
            <div className=' w-46  flex flex-col items-center mb-9' >
                <FontAwesomeIcon icon={faCreditCard} className='w-20 h-20 md:w-32 md:h-32 text-yellow-600' />
                <p className='text-2xl md:text-3xl font-bold text-white'>1000+</p>
                <p className='text-2xl md:text-3xl font-bold text-gray-500'>Successful Transition</p>
            </div>
            
        </div>
    </div>
  )
}

export default Cards