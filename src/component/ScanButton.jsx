import React from 'react'

const ScanButton = () => {
  return (
    <div>
    {/* download button */}
<button className='bg-[#AFE274]  py-3 px-4 flex justify-center items-center gap-4 text-black rounded-full text-sm '>
  Download app
  <img src="/images/barcode-scan.svg" alt="apple" />
</button>
  </div>
  )
}

export default ScanButton
