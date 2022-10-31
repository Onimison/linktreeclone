import React from 'react'
import share from '../../assets/share.png'
import dots from '../../assets/dots.png'
import bashir from '../../assets/bashir.jpg'

const profile = () => {

  return (
    <section className="flex flex-col items-center p-8 relative">
      <div className='w-32 rounded-full overflow-hidden'>
        <img src={bashir} id='profile_img' alt='Photo of Bashir' className="w-full" />
      </div>
      <p id='twitter'>Bashir Onimisi</p>
      <p id='slack' className="hidden">@Onimison</p>

      <div className="absolute right-0 p-3 border border-dashed rounded-full border-[#D0D5DD] cursor-pointer md:hidden">
        <img src={dots} alt='share icon' />
      </div>

      <div className="hidden absolute p-3 border border-dashed rounded-full border-[#D0D5DD] cursor-pointer md:block md:right-[25%]">
        <img src={share} alt='share icon' />
      </div>

    </section>
  )
}

export default profile