import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/Cert.json"
import { CertModuleCert } from "../scdata/deployed_addresses.json"

const Issuecert = () => {
  const provider = new BrowserProvider(window.ethereum);

  async function connectToMetamask() {
    const signer = await provider.getSigner()

    console.log('Address: ', signer.address);
  }
  const [coursename, setCourseName] = useState('Certified Blockchain Associate')
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('A')
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  const issue = async (e) => {
    e.preventDefault()

    const signer = await provider.getSigner()
    const instance = new Contract(CertModuleCert, abi, signer)

    const txl = await instance.issue(id, name, coursename, grade, date);

    console.log('Transaction Return', txl)

    console.log(`id: ${id},name: ${name},course name: ${coursename},grade: ${grade},date: ${date}`);

    navigate('/')
  }
  return (
    <>
      <div class="ml-1 p-3">
        <h3 className='bg-yellow-200 text-center'>Issue New Certificate</h3>
        <button className='text-lg p-2 mb-3 ml-[44%]  rounded-xl  text-blue-500 border-2 border-teal-500 hover:text-white hover:bg-blue-600' onClick={connectToMetamask}>connect to metamask</button>
        <form onSubmit={issue} >
        <label for="course">Select course*</label><br />
        <select value={coursename} onChange={(e) => setCourseName(e.target.value)} name="course" id="course" class="border rounded mt-1 p-2 w-full">
          <option value="cba" selected>Certified Blockchain Associate</option>
          <option value="CED">Certified Ethereum Developer</option>
          <option value="CHF">Certified Hyperledger Fabric Developer</option>
        </select><br /><br />
        <label for="certificate-id">Certificate ID*</label><br />
        <input value={id} onChange={(e) => setId(e.target.value)} type="password" name="certificate-id" id="certificate-id" placeholder="Certificate ID" class="border rounded mt-1 p-2 w-full" /><br /><br />
        <label for="candidate-name">Candidate Name*</label><br />
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="candidate-name" id="candidate-name" placeholder="Name" class="border rounded mt-1 p-2 w-full" /><br /><br />
        <label for="grade">Select Grade*</label><br />
        <select value={grade} onChange={(e) => setGrade(e.target.value)} name="grade" id="grade" class="border rounded mt-1 p-2 w-full">
          <option value="S" selected>S</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select><br /><br />
        <label for="issue-date">Issue Date *</label><br />
        <input value={date} onChange={(e) => setDate(e.target.value)} type="text" name="issue-date" id="issue-date" placeholder="dd/mm/yyyy" class="border rounded mt-1 p-2 w-full" /><br /><br /><br />
        <button className='bg-blue-500 text-white px-4 py-2 ml-[48%] rounded-xl' type='submit'>submit</button>
      </form>

    </div >
    
    </>


  )
}

export default Issuecert