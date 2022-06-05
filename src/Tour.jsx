import React from 'react'

const Tour = ({ id, name, image, price, info }) => {
  return (
    <main>
      <div className='w-[30rem] shadow-md mb-8'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
        <p>{info}</p>
        <button>Not Interested</button>
      </div>
    </main>
  )
}

export default Tour