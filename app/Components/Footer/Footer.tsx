import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className=" px-32 mt-10 py-8 bg-[var(--mainBrown)]">



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
  )
}

export default Footer
