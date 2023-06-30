import React from 'react'
import poster1 from "../images/poster.jpg"

const Header = () => {
    return (
        <header className='w-full h-auto flex'>
            
            <div className=' w-2/4 h-auto hidden md:block border-b border-white'>
                <img className='' src={poster1} alt="study-image" />
            </div>
            <div className='bg-slate-800 w-full h-auto md:w-2/4'>
                Hello
            </div>
        </header>
    )
}

export default Header