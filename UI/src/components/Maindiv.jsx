import React, { useState } from 'react'
import pic from '../assets/comp.avif'
import { useNavigate } from 'react-router-dom';
import { BrowserProvider } from 'ethers'

const Maindiv = () => {
  const [certificateId, setCertificateId] = useState('')
    const navigate = useNavigate()

    const provider = new BrowserProvider(window.ethereum);

    async function connectToMetamask() {
        const signer = await provider.getSigner()

        console.log('Address: ', signer.address);
    }

    const search = (e) => {
        e.preventDefault()
        if (certificateId.trim()) {
            navigate(`/view/${certificateId}`)
        }
    }


  return (
   <>
   <div className='border border-gray-300 p-12 bg-white rounded-xl shadow-lg max-w-4xl mx-auto ' >
   <h2 class="text-center text-violet-800 text-3xl font-bold mb-4">Certificate Dapp</h2>
   <button className='text-lg p-2 mb-3 ml-[38%] rounded-xl text-blue-300 border-2 bg-white  hover:text-black hover:bg-green-100' onClick={connectToMetamask}>connect to metamask</button>
    <div class="text-center mb-4">
        <img src={pic} class="w-72 mx-auto rounded-lg"/>
    </div> 
    <form onSubmit={search}>
    <div class="text-center mb-4">
        <input type="text" id='certificateId' name='certificateId' value={certificateId} onChange={(e)=> setCertificateId(e.target.value)} placeholder="Enter Certificate ID " class="p-2 border rounded"/>
    </div>
    
       <button class="bg-blue-500 text-white px-4 py-2 ml-[45%] rounded">Search</button>
    
    </form>
    </div>
   
   </>
  )
}

export default Maindiv