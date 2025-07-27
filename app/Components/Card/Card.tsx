import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { CardProps } from '@/types/interface';
const Card:React.FC<CardProps> = ({product,prodId}) => {
  return (
    <div className='w-[300px] h-[400px] relative border-2 text-white border-amber-700 rounded-md'>
        <div className='w-full h-2/3 rounded-md bg-amber-200'>  
                <Image className='  w-full h-full object-cover  rounded-t-md' src={product.image}  width={200} height={200} alt=''/>

        </div>
        <div className=' w-full h-1/3  rotate-180'>
                <Image className='w-full h-full object-cover  opacity-50 ' src={product.image}  width={200} height={200} alt=''/>

        </div>
        <div className='flex  w-full absolute bottom-8'>
          <div className='w-2/3 border-1 rounded-md py-1 '>          <p >{product.productName}</p>
</div>
<Link className=' w-1/3 bg-[var(--milkColor)] flex justify-center items-center rounded-md' href={`/products/${prodId}`}>
<button  >Details</button>

</Link>
</div>
      <div className='flex w-full absolute bottom-0  justify-between'>

        <div className='flex w-1/3 bg-amber-50 
         rounded-md '>
            <button className=' w-1/3 bg-[var(--mainBrown)]  '>-</button>
            <div className=' flex justify-center text-2xl w-1/3 text-[var(--mainBrown)]'>2</div>
            <button className='  w-1/3 bg-[var(--mainBrown)] border-r-1 '>+</button>
        </div>
        <button className='w-2/3 bg-[var(--mainBrown)]  rounded-r-md '>buy</button>
      </div>
    </div>
  )
}

export default Card
