import React, { useState } from 'react'

const Tour = ({ id, name, image, price, info }) => {
  // State to read more string
  const [readMore, setReadMore] = useState(false)

  function readMoreText() {
    setReadMore(!readMore)
  }
  
  return (
    <main>
      <div className='w-full shadow-md mb-8'>
        <img src={image} alt={name}  className='w-full h-[25rem] object-cover md:h-[35rem]'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='flex justify-between'>
            <h4 className='text-2xl font-medium'>{name}</h4>
            <p className='font-bold text-blue-400'>${price}</p>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}`}
            {" "}
            <button 
              className='border-blue-500 border-2 py-[.01rem] px-2 text-blue-500 font-semibold '
              onClick={readMoreText}>
              {readMore ? 'Show Less' : '...'}
            </button>
          </p>
          <button className='text-gray-700 font-semibold border-2 border-black self-center
          px-8 py-1 rounded-md'>Not Interested</button>
        </div>
      </div>
    </main>
  )
}

export default Tour