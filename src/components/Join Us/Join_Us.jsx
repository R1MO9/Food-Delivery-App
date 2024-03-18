import React from 'react'

const Join_Us = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 m-4'>
      {/* Partner With Us */}
      <div className="relative">
        <img className="w-full h-auto" src="Images/Rectangle 8.png" alt="Overlay" />
        <div className="absolute top-0 text-xs left-4 bg-white p-3 rounded-b-lg font-bold lg:left-10 lg:text-lg">
          <p>Earn more with low fees</p>
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
          <p className="text-amber-500 font-semibold sm:text-sm mb-2">Signup as a business</p>
          <p className="text-3xl font-bold text-white mb-4">Partner with us</p>
          <button className="bg-amber-500 text-black px-6 py-2 rounded-full">Get started</button>
        </div>
      </div>





        {/* Ride With Us */}
        <div>
            <img src="Images\Group 10.png" alt=""/>
        </div>
    </div>
  )
}

export default Join_Us