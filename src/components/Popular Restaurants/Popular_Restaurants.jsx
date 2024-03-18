import React from 'react'

const Popular_Restaurants = (props) => {
  return (
    <div className='rounded-xl bg-amber-500 m-4 w-36 sm:w-40 sm:m-0 shrink-0'>
        {/* Images */}
        <div className=''>
            <img src={props.img} alt={props.restaurants} className='w-44' />
        </div>
        {/* Text */}
        <div className='p-2 text-center'>
            <p className='font-bold text-white'>{props.restaurants}</p>
        </div>
    </div>
  )
}

export default Popular_Restaurants