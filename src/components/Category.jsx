 import React from 'react'

export const Category = () => {
  return (
    <>
    <section className='bg-blue-600 text-neutral-300 text-center rounded-b-3xl'>
    <div className='text-lg font-mono font-semibold py-5 '>Your Result</div>
    <div className='bg-blue-900 h-36 w-36 rounded-full mx-auto space-y-3 mb-7' >
    <div className='text-6xl font-bold pt-7'>76</div> 
    <div className='text-slate-400'>of 100</div>
    </div>
    <div className='text-2xl font-semibold mb-2'>Great</div>
    <div> <p className='px-12  pb-6'>You scored higher than 65% of the people who have taken these tests </p></div>
    </section>
    <section>
      <div className='text-xl font-semibold mx-10 my-2 '>Summary</div> 
      <div className='flex flex-col gap-5 py-3 mx-10'>
      <div className='flex flex-row bg-red-200 px-4 rounded-lg py-3'>
        <div className='text-rose-700 basis-1/2'>Reaction</div>
        <div className='basis-1/2'>80/100</div>
      </div>
      <div className='flex flex-row bg-orange-100 px-4 rounded-lg py-3 '>
        <div className='basis-1/2'>Memory</div>
        <div className='basis-1/2' >92/100</div>
      </div>
      <div className='flex flex-row bg-green-100 px-4 rounded-lg py-3'>
        <div className='basis-1/2'>Verbal</div>
        <div className='basis-1/2'>61/100</div>
      </div>
      <div className='flex flex-row bg-blue-100 px-4 rounded-lg py-3'>
        <div className='basis-1/2'>Visual</div>
        <div className='basis-1/2'>72/100</div>
      </div>
      <button className='bg-blue-900 px-9 py-3 text-white rounded-3xl '>Continue</button>
      </div> 
    </section>
    </>
  )
}
