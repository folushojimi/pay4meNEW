import React from 'react'
import Carousel from '../component/carousel'

const Testimonial = () => {
  return (
    <div className='h-[800px] bg-white'>
      {/*3D Curve*/}
       <div className='absolute right-1'>
       <img src="/images/3Dcurve.svg" alt="" className='h-[220px]'/>
       </div>

      {/*Main Content*/}
       <div className=' border-2 border-red-500 relative z-10 pt-20'>
        {/* header */}
        <div className='ml-28'>
            <img src="/images/testimony.svg" alt="" className='mb-9'/>
            <h1 className='font-semibold text-3xl mb-12'>Don’t take our words for it,
            <br /> Take theirs.</h1>
        </div>

       {/* the carousel */}
       <div>
         <Carousel/>
       </div>

 

       </div>

      
    </div>
  )
}

export default Testimonial
