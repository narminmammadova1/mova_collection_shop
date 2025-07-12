import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-leckerli-one)] "
   
     >
      <main 
      >
       <section style={{margin:"0px"}}>
       
        <div className="w-full  relative font-[family-name:var(--font-leckerli-one)]  text-white  h-screen">
           <header className=" absolute top-12 left-30">
          <nav >
            <ul className="   flex text-[24px]  gap-[47px]">
              <li>Products</li>
              <li>About us </li>
              <li>Contact</li>
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
       <section className="px-30 mt-[132px] flex justify-center font-[family-name:var(--font-leckerli-one)]  text-[var(--mainBrown)]">
        <div className=" text-center w-3/4 ">
<h2 className="  text-[48px]">Where Beauty meets Purpose</h2> 
        <p className=" ">Immerse yourself in a world of ethically crafted jewelry, designed to elevate your style while honoring the planet. Every piece tells a story of artistry, care, and sustainability.</p>

        </div>
        
        </section>
<section className=" mt-[75px] px-32 flex-col gap-[75px]">
  <div className=" w-full flex justify-between ">
    <Image className="w-[521px] h-[470px]" src='images/ring1.svg' width={200} height={200} alt=""/>
        <Image  className="w-[521px] h-[470px]" src='images/ring2.svg' width={200} height={200} alt=""/>

    
      </div>
      <div className=" text-center relative">
      <p className=" z-10 text-[var(--brownColor)]">Mova_collection, we believe jewelry is more than an accessory—it’s an expression of your unique story. Every piece in our collection is thoughtfully designed and responsibly crafted, combining timeless elegance with sustainable practices. Whether you’re celebrating a special moment or looking for something extraordinary to wear every day, Fairlight offers jewelry that resonates with meaning and beauty. Join us in embracing style with purpose.</p>
      <h3 className=" absolute top-0 z-[-1] left-50   text-8xl text-[var(--milkColor)] ">Mova Collection</h3>
      </div>
</section>
<section>
  <article className="text-center mt-32 px-30">
    <h4 className=" text-[var(--mainBrown)] text-[52px]">Ethical Elegance</h4>
    <p className="text-[var(--brownColor)]"> Discover Timeless Jewelry That Reflects Your Values—Where Every Piece is Thoughtfully Designed, Responsibly Sourced, and Crafted to Celebrate Beauty, Integrity, and Sustainability.</p>
  </article>
</section>
<section className="px-32 ">
  <div className=" flex w-full   relative justify-between items-center ">
<Image className="w-[900px]  h-[750px]" src='images/woman2.svg' width={200} height={200} alt=""/>
{/* <p className="transform rotate-[270deg] text-[180px] absolute   right-[-26]  text-[var(--milkColor)]">Essence</p> */}
   <Image className=" h-[650px]  align-bottom" src='images/essence.svg' width={200} height={200} alt=""/>

  
  </div>
  
</section>

<section className="px-32 ">
  <article className=" flex flex-col gap-6 text-[var(--milkColor)]" >
    <p className="text-[64px]">Crafted for a Better Tomorrow</p>
    <p  className=" text-[24px]"> At Fairlight, we prioritize sustainability in every step of our process, from sourcing ethical materials to using eco-friendly packaging. Our commitment ensures that each piece of jewelry not only sparkles but also contributes to a brighter future for our planet.</p>
  <p className=" text-[24px]">We partner with artisans who share our dedication to quality and ethical craftsmanship, creating designs that are as meaningful as they are beautiful. When you choose Fairlight, you’re choosing jewelry that’s made with care for people, communities, and the Earth.</p>
  </article>
</section>

<section className="px-32  ">
  <div className=" flex w-full   relative  justify-end  items-center overflow-hidden  ">
 
 <Image className=" h-[650px] block  align-bottom" src='images/luxury.svg' width={200} height={200} alt=""/>

 <Image className=" w-[900px]    align-bottom h-[850px] block" src='images/neklace.svg' width={200} height={200} alt=""/>

  </div>
  
</section>

<section className="px-32 ">
  <article className=" flex flex-col gap-6 text-[var(--milkColor)]" >
    <p className="text-[64px]">Redefining Luxury with Purpose</p>
    <p  className=" text-[24px]"> Luxury at Fairlight goes beyond beauty—it’s about creating timeless pieces with purpose. Each design is a testament to impeccable craftsmanship, made from the finest materials sourced responsibly from around the world.</p>
  <p className=" text-[24px]">Our dedication to luxury is reflected in every detail, combining elegance with sustainability. When you wear Fairlight, you embrace sophistication that honors both style and ethical values, setting a new standard for refined living.</p>
  </article>
</section>
<section className="px-32 ">
  <article className=" text-center">
    <p className=" text-[var(--brownColor1)] text-[82px]">Our Craft, Your Legacy</p>
    <p className=" text-[24px] text-[var(--milkColor)]">Explore the artistry and sustainability behind every piece—where impeccable craftsmanship meets timeless design.</p>
  </article>
</section>
<section className="flex  gap-12 mt-16 px-32">
  <div className=" flex flex-col text-center  items-center text-[var(--milkColor)]">
    <Image className="h-[225px]" src='images/model1.svg' width={200} height={200} alt=""/>
  
  <p className="text-[48px]"> Ethically Sourced Materials</p>
  <p className="tex-[32px]"> We carefully select materials that are not only stunning but also sustainably sourced. Each gemstone, metal, and component is chosen with respect for the environment and the artisans who craft them.</p>
    </div>
    <div className=" flex flex-col text-center  items-center text-[var(--milkColor)]">
    <Image className="h-[225px]" src='images/model2.svg' width={200} height={200} alt=""/>
  
  <p className="text-[48px]"> Ethically Sourced Materials</p>
  <p className="tex-[32px]"> We carefully select materials that are not only stunning but also sustainably sourced. Each gemstone, metal, and component is chosen with respect for the environment and the artisans who craft them.</p>
    </div>
    <div className=" flex flex-col text-center  items-center text-[var(--milkColor)]">
    <Image className="h-[225px]" src='images/model3.svg' width={200} height={200} alt=""/>
  
  <p className="text-[48px]"> Ethically Sourced Materials</p>
  <p className="tex-[32px]"> We carefully select materials that are not only stunning but also sustainably sourced. Each gemstone, metal, and component is chosen with respect for the environment and the artisans who craft them.</p>
    </div>
  
</section>
<section className="px-32 my-16 relative">
  <div className=" relative">
  <Image className="  " width={1600}  height={300} src='images/pearl3.svg' alt=""/>
<div className=" absolute bottom-0 px-10 text-[var(--milkColor)]">
    <p className="text-[64px]">Stay Inspired with Fairlight</p>
    <p className="text-[32px]">Explore our blog for the latest in jewelry trends, sustainability practices, and the stories behind our exquisite designs.</p>
  </div>
  </div>
  

</section>
      </main>
      <footer className=" px-32  py-8 bg-[var(--mainBrown)]">



      <div className="flex justify-between">
        <div className="text-[var(--milkColor)] flex flex-col">
       
        
          <p className="text-[64px]">Mova Collection</p>
          <p className="text-[32px]">created by narmin mammadova</p>

<small>All rights reserved &copy; 2025</small>
        </div>
        <div className="  flex flex-col gap-4 w-1/3 ">
<textarea
className="bg-[var(--milkColor)] px-4 w-full rounded-md border-1 border-amber-700"
  name="message"
  id="message"
  placeholder="write your message..."
  rows={4}
  maxLength={500}
 
  required
  
></textarea>         
 <button className=" w-full h-[48px] rounded-md bg-[var(--mainBrown)] border-1 border-[var(--milkColor)]">Send Email</button>
        </div>
      </div>
      </footer>
    </div>
  );
}   