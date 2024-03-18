import React from 'react'

const Join_Us = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 m-4'>
      {/* Partner With Us */}
      <div class="relative">
  <img class="w-full h-auto" src="Images/Rectangle 8.png" alt="Overlay" />
  <div class="absolute top-0 text-xs left-4 bg-white p-3 rounded-b-lg font-bold lg:left-10 lg:text-lg flex items-center">
    <p>Earn more with low fees</p>
  </div>
  <div class="absolute bottom-2 flex flex-col items-start lg:left-10 lg:bottom-10 p-4">
    <p class="text-amber-500 font-semibold sm:text-sm mb-2">Signup as a business</p>
    <p class="text-3xl font-bold text-white mb-4">Partner with us</p>
    <button class="bg-amber-500 text-white px-6 py-1 rounded-full font-semibold">Get started</button>
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