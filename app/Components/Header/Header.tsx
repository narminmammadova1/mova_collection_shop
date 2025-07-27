import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      
   <section style={{margin:"0px"}}>
       
        <div className="w-full  relative font-[family-name:var(--font-leckerli-one)]  text-white  h-screen">
           <header className=" absolute top-12 left-30">
          <nav >
            <ul className="   flex text-[24px]  gap-[47px]">
            
             <li >
                <Link href='/'>
                 Home
                </Link>
                
               </li>
              <li >
                <Link href='/products'>
                 Products
                </Link>
                
               </li>
              <li> <Link href='/about'>
                About 
                </Link> </li>
              <li><Link href='/contact'>
                Contact 
                </Link></li>
              <li>Blog</li>
              
            </ul>
          </nav>
        </header>
              <Image className="w-full h-full object-cover" src='images/banner3.svg' width={200} height={200}  alt="pearl"/>
                         <Image className=" absolute z-5 bottom-[-4]  w-full" src='images/vektor1.svg' width={200} height={200}  alt=""/>
                         <Image className=" absolute z-3  bottom-0 w-full" src='images/vektor2.svg' width={200} height={200}  alt=""/>
                         <Image className=" absolute z-4 top-10 right-18  " src='images/rectangle.svg' width={200} height={200}  alt=""/>
<div className=" absolute bottom-36 left-30 w-1/2">
  <h1 className="text-[56px]">Mova Collection</h1>
  <p>Discover exquisite jewelry designed to captivate hearts and celebrate moments. At Fairlight, we combine artistry, sustainability, and unmatched craftsmanship to create treasures that last a lifetime.</p>
</div>
        </div>
                         <Image className=" absolute  z-2 top-30 right-30 w-[369px]" src='images/woman.svg' width={200} height={200}  alt="woman"/>

       </section>

    </div>
  )
}

export default Header
