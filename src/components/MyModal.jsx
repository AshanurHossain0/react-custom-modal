import React, { useState } from 'react'
import ShowModal from './ShowModal'


const MyModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='m-10'>
      {isOpen && <ShowModal setIsOpen={setIsOpen} />}
      <div >
        <span className='mr-4'>Hii This is nur</span>
        <button className='p-3 border border-gray-500' onClick={() => setIsOpen(true)} >Open Dialog</button>
      </div>
        
      <p>Hii man how are you</p>
    </div>
  )
}

export default MyModal




































// import React, { useState } from 'react'
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: '20%',
//     bottom: 'auto',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// const MyModal = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div className='m-10'>
//       <div>
//         <span className='mr-5'>Hii This is nur</span>
//         <button className='p-3 border border-gray-500' onClick={()=>setIsOpen(true)} >Open Dialog</button>
//       </div>
//       <Modal isOpen={isOpen} className='' style={customStyles}>
//         <div className='flex justify-between w-full '>
//           <p className='text-3xl text-center w-full text-blue-600'>Register here</p>
//           <button className='text-2xl' onClick={()=>{setIsOpen(false)}}>&#x2715;</button>
//         </div>
//         <form className='flex flex-col justify-evenly items-center w-full h-[300px]'>
//           <input className='outline-none border-b border-gray-300 p-1 w-full text-xl' type='text' placeholder='Enter Name' />
//           <input className='outline-none border-b border-gray-300 p-1 w-full text-xl' type='text' placeholder='Enter Name' />
//           <input className='outline-none border-b border-gray-300 p-1 w-full text-xl' type='text' placeholder='Enter Name' />
//           <input className='outline-none border-b border-gray-300 p-1 w-full text-xl' type='text' placeholder='Enter Name' />
//         </form>
//       </Modal>
//     </div>
//   )
// }