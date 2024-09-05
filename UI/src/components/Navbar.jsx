import React from 'react'

const Navbar = () => {
  return (
   <>
    <div class="text-right mb-4 bg-sky-400 l-30%">
        <a href='/'><button class="bg-cyan-400 text-black rounded-lg px-4 py-3">Home</button></a>
        <a href='/issue'><button class="bg-gray-100 text-black rounded-lg  px-4 py-3 ml-2">Issue Certificate</button></a>
    </div>
   </>
  )
}

export default Navbar