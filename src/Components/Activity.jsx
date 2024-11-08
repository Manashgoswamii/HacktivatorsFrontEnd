import React from 'react'
import Footer from './Footer'

function Activity() {
  return (
    <div>
      
      <div className='flex justify-center mt-24'>
      <label className="input w-1/2 rounded-full bg-gray-200 flex items-center gap-2">
  <input type="text" className="grow" placeholder="What are you looking for ?" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-8 w-8 opacity-70 text-6xl text-gray-600">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

      </div>
       <div className='flex justify-center mt-16'>
          <p className='text-4xl text-customBlue font-bold'>Logical Games</p>
       </div>

       <div className="flex justify-center items-center mt-8 gap-x-6">
  <div className="h-82 w-64  rounded-md shadow-custom p-4">
    {/* Image Section */}
    <div className="h-[70%] w-full">
      <img src='https://res.cloudinary.com/dmhbmurzw/image/upload/v1731076234/WhatsApp_Image_2024-11-08_at_19.56.35_sng27r.jpg' alt="Sudoku Game" className="h-full w-full object-cover rounded-t-md" />
    </div>

    {/* Title and Button Section */}
    <div className="h-[30%] flex flex-col items-center justify-center space-y-2 mt-2">
      <h2 className="text-xl font-semibold">Sudoku Game</h2>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition">
        Play Now
      </button>
    </div>
  </div>



  <div className="h-82 w-64  rounded-md shadow-custom p-4">
    {/* Image Section */}
    <div className="h-[70%] w-full">
      <img src='https://res.cloudinary.com/dmhbmurzw/image/upload/v1731076234/WhatsApp_Image_2024-11-08_at_19.56.35_sng27r.jpg' alt="Sudoku Game" className="h-full w-full object-cover rounded-t-md" />
    </div>

    {/* Title and Button Section */}
    <div className="h-[30%] flex flex-col items-center justify-center space-y-2 mt-2">
      <h2 className="text-xl font-semibold">Sudoku Game</h2>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition">
        Play Now
      </button>
    </div>
  </div>

  <div className="h-82 w-64  rounded-md shadow-custom p-4">
    {/* Image Section */}
    <div className="h-[70%] w-full">
      <img src='https://res.cloudinary.com/dmhbmurzw/image/upload/v1731076234/WhatsApp_Image_2024-11-08_at_19.56.35_sng27r.jpg' alt="Sudoku Game" className="h-full w-full object-cover rounded-t-md" />
    </div>

    {/* Title and Button Section */}
    <div className="h-[30%] flex flex-col items-center justify-center space-y-2 mt-2">
      <h2 className="text-xl font-semibold">Sudoku Game</h2>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition">
        Play Now
      </button>
    </div>
  </div>
</div>

    {/* social game */}

   
       <div className='flex justify-center mt-40'>
          <p className='text-4xl text-customBlue font-bold'>Social Games</p>
       </div>

       <div className="flex justify-center items-center mt-8 gap-x-6">
  <div className="h-82 w-64  rounded-md shadow-custom p-4">
    {/* Image Section */}
    <div className="h-[70%] w-full">
      <img src='https://res.cloudinary.com/dmhbmurzw/image/upload/v1731076234/WhatsApp_Image_2024-11-08_at_19.56.35_sng27r.jpg' alt="Sudoku Game" className="h-full w-full object-cover rounded-t-md" />
    </div>

    {/* Title and Button Section */}
    <div className="h-[30%] flex flex-col items-center justify-center space-y-2 mt-2">
      <h2 className="text-xl font-semibold">Sudoku Game</h2>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition">
        Play Now
      </button>
    </div>
  </div>



  <div className="h-82 w-64  rounded-md shadow-custom p-4">
    {/* Image Section */}
    <div className="h-[70%] w-full">
      <img src='https://res.cloudinary.com/dmhbmurzw/image/upload/v1731076234/WhatsApp_Image_2024-11-08_at_19.56.35_sng27r.jpg' alt="Sudoku Game" className="h-full w-full object-cover rounded-t-md" />
    </div>

    {/* Title and Button Section */}
    <div className="h-[30%] flex flex-col items-center justify-center space-y-2 mt-2">
      <h2 className="text-xl font-semibold">Sudoku Game</h2>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition">
        Play Now
      </button>
    </div>
  </div>

  <div className="h-82 w-64  rounded-md shadow-custom p-4">
    {/* Image Section */}
    <div className="h-[70%] w-full">
      <img src='https://res.cloudinary.com/dmhbmurzw/image/upload/v1731076234/WhatsApp_Image_2024-11-08_at_19.56.35_sng27r.jpg' alt="Sudoku Game" className="h-full w-full object-cover rounded-t-md" />
    </div>

    {/* Title and Button Section */}
    <div className="h-[30%] flex flex-col items-center justify-center space-y-2 mt-2">
      <h2 className="text-xl font-semibold">Sudoku Game</h2>
      <button className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition">
        Play Now
      </button>
    </div>
  </div>
</div>
     <Footer/>
    </div>
  )
}

export default Activity
