import React from 'react'
import FoodCard from '../FoodCard/FoodCard'

const NewTest = () => {
  return (
    <div className=' m-4 bg-gray-400 py-6 rounded-xl'>
      <h1 className="text-4xl text-center text-blue-600 font-bold">New Test</h1>

      <div className='flex'>
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  )
}

export default NewTest