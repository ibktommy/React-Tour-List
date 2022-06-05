import React from 'react'
import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <main>
      <div className='relative'>
        <h1 className='font-bold text-center mt-10 text-5xl text-gray-700 pb-2'>Our Tours</h1>
        <div className='line'></div>
      </div>

      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour}></Tour>
        ))}
      </div>
    </main>
  )
}

export default Tours