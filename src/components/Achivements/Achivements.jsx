import React, {useState, useEffect} from 'react'

const Achievement = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Calculate the ratio of the two final counts
    const finalCount1 = 346;
    const finalCount2 = 732000;
    const ratio = finalCount2 / finalCount1;

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (count1 < finalCount1) {
                setCount1((prevCount) => prevCount + 1);
            }
        }, 30);

        const interval2 = setInterval(() => {
            if (count2 < finalCount2) {
                setCount2((prevCount) => prevCount + ratio);
            }
        }, 30);

        // Clear intervals
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [count1, count2]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 bg-amber-500 text-white text-center m-4 rounded-xl p-10 py-7 font-thin'>
        <div className='sm:border-r-2 px-2'> 
            <p className='text-4xl'>{count1}+</p>
            <p className="font-semibold">Registerd Riders</p>
            <hr className='mx-20 m-4 sm:hidden' />
        </div>


        <div className='sm:border-r-2 px-2'>
            <p className='text-4xl'>{Math.floor(count2)}+</p>
            <p className="font-semibold">Order Delivered</p>
            <hr className='mx-20 m-4 sm:hidden' />
        </div>

        <div className='sm:border-r-2 px-2'>
            <p className='text-4xl'>690+</p>
            <p className="font-semibold">Restaurant Partners</p>
            <hr className='mx-20 m-4 sm:hidden' />
        </div>

        <div className='px-2'>
            <p className='text-4xl'>17,457+</p>
            <p className="font-semibold">Food Items</p>
        </div>
    </div>
  )
}

export default Achievement