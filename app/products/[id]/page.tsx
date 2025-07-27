// import { useRouter } from 'next/router'
import Swiper from '@/app/Components/Swiper/swiper'
import Image from 'next/image'
import React from 'react'

const Details = () => {
//  const router=useRouter()
//  const {id}=router.query
  return (
    
    <div className='  h-screen rounded-tl-2xl  '>
     <section className='px-32 flex gap-10' >
<div className='w-1/2 h-[450px]  rounded-tl-2xl  rounded-br-2xl bg-amber-200'>
  {/* <Image width={200} height={200} src='/images/pearl3.svg' alt=''/> */}
</div>
<div className='w-1/2 
'>
  <h1 className='  border-b-2  text-8xl '>Product name</h1>
  <div className='flex flex-col gap-10 mt-6'>
    <div className='w-full p-6 text-white bg-[var(--brownColor2)]  rounded-tl-2xl  rounded-br-2xl'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, tenetur nobis. Mollitia, veniam nulla? A ratione ipsum accusantium, architecto cupiditate quibusdam aliquid similique recusandae totam nemo blanditiis nesciunt nobis obcaecati nisi temporibus repellat ad quam explicabo excepturi et asperiores quisquam amet repudiandae? Fugit ad, necessitatibus 
      ducimus vitae asperiores aut sapiente!</p>
  </div>
  <div className='flex justify-between gap-16 text-white '>
    <button className='bg-[var(--brownColor2)] rounded-tl-2xl py-1  rounded-br-2xl w-1/3 '>-</button>
        <button  className=' bg-[var(--brownColor2)] py-1   w-1/3 rounded-tl-2xl  rounded-br-2xl '>1</button>

    <button className='bg-[var(--brownColor2)] w-1/3 py-1   rounded-tl-2xl  rounded-br-2xl'>+</button>

  </div>
  <button className='bg-[var(--brownColor2)] text-white w-full rounded-tl-2xl py-1  rounded-br-2xl'>Buy</button>
  </div>
  
</div>
     </section>

    <section>
  
    </section>
    </div>
  )
}

export default Details
