import React from 'react'

const Button = () => {
  return (
    <div>
      {/* download button */}
<button className='bg-[#AFE274] p-4 px-6 flex justify-center gap-2 items-center text-black rounded-full text-sm border-1 border-[#A4C47D]'>
    Download app

<div className='flex justify-center gap-2 items-center'>
     <img src="/images/playstore.svg" alt="playstore" />
    <div className='h-4 border-[1px] border-black'>
    </div>
    <img src="/images/apple.svg" alt="apple" />
</div>

</button>
    </div>
  )
}

export default Button
