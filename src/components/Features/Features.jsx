import React from 'react'

const Features = () => {
  return (
    <div className='m-4'>
        <div className='text-center sm:text-left'>
            <h1 className='font-bold text-2xl'>Know more about us!</h1>
        </div>

        <div className='m-4 flex bg-slate-950 justify-between flex-wrap md:flex-nowrap mx-auto p-4 rounded-xl'>
            <div className='w-full rounded-xl text-center md:w-1/4 py-4 sm:py-0'>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black'>How does Order.UK work?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black'>What payment methods are accepted?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black'>Can I track my order in real-time?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black'>Are there any special discounts or peomotions available?</p>
                <p className='font-semibold px-6 py-1 rounded-full text-white hover:bg-amber-500 hover:text-black'>Is Order.UK available in my area?</p>
            </div>

            <div className='w-full bg-gray-300 py-4 m-2 rounded-xl text-center md:w-1/4'>
                <p className='font-bold'>Place an Order!</p>
                <img src="Images\Features\Features-2.png" alt="" className='mx-auto' />
                <p>Place order through our </p>
                <p>website or mobile app</p>
            </div>

            <div className='w-full bg-gray-300 py-4 m-2 rounded-xl text-center md:w-1/4'>
                <p className='font-bold'>Track Progress</p>
                <img src="Images\Features\Features-3.png" alt="" className='mx-auto' />
                <p>You can track your order</p>
                <p> status with delivery time</p>
            </div>

            <div className='w-full bg-gray-300 py-4 m-2 rounded-xl text-center md:w-1/4'>
                <p className='font-bold'>Get your Order!</p>
                <img src="Images\Features\Features-1.png" alt="" className='mx-auto' />
                <p>Receive your order at a</p>
                <p> lighting fast speed!</p>
            </div>
        </div>
    </div>
  )
}

export default Features