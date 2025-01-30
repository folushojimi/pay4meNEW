import React from 'react'

const Whatweoffer = () => {
  return (
    <div className='bg-black h-[1000px] w-full'>
          {/* the background content */}
        <div className='flex justify-center items-center gap-[600px] absolute'>
            <img src="/images/back1.svg" alt="" />
            <img src="/images/back2.svg" alt="" />
        </div>

        {/* the main content */}
        <div className='pt-20'>
      {/* header */}
         <div className='flex flex-col justify-center items-center relative z-10'>
            <img src="/images/offer-icon.svg" alt="" className='mb-7 '/>
            <h1 className='text-white font-semibold text-3xl text-center'>
                Simplified Payments for Your
                <br /> Relocation Dreams</h1>
         </div>

      {/* body + footer */}
        <div>
        </div>

        </div>


      
    </div>
  )
}

export default Whatweoffer
