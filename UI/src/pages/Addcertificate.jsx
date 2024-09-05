import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const certidetails = () => {
  const [courseId,setCourseId]=useState('');
  const [coursename,setCoursename]=useState('')
  const [studentname,setStudentname]=useState('');
  const [ grade,setGrade]=useState('')
  const [date,setDate]=useState('')
  const navigate=useNavigate()


  const submitForm=async(e)=>{
    e.preventDefault()
    const newCertidetails={
      // if key value is same we can add only one value
      courseId,
      coursename,
      studentname,
      grade,
      date
    }
    const res=await addCourseSubmit(newCertidetails)
    toast.success('Course added succesfullly')
    navigate('/certificate')
   
  }
  const addCourseSubmit=async(newCertidetails)=>{
    const res=await fetch('https://localhost:5001/certificate',{
      method:'POST',
      headers:{
        'Content-Type':"application/json",
    },
    body: JSON.stringfy(newCertidetails)
  })

  return res;
}
  return (
   <>
      <div class="ml-1 p-3">
            <h3>Issue New Certificate</h3>
            <form action="submit" onSubmit={submitForm} />
                <label for="course">Select course*</label><br/>
                <select name="course" id="course" value={coursename} onChange={(e)=>setCoursename(e.target.value)}  class="border rounded mt-1 p-2 w-full">
                    <option value="cba" selected>Certified Blockchain Associate</option>
                    <option value="CED">Certified Ethereum Developer</option>
                    <option value="CHF">Certified Hyperledger Fabric Developer</option>
                </select><br/><br/>
                <label for="certificate-id">Certificate ID*</label><br/>
                <input type="password" name="certificate-id" id="certificate-id" placeholder="Certificate ID" value={courseId} onChange={(e)=>setCourseId(e.target.value)} class="border rounded mt-1 p-2 w-full"/><br/><br/>
                <label for="candidate-name">Candidate Name*</label><br/>
                <input type="text" name="candidate-name" id="candidate-name" placeholder="Name" value={studentname} onChange={(e)=>setStudentname(e.target.value)}  class="border rounded mt-1 p-2 w-full"/><br/><br/>
                <label for="grade">Select Grade*</label><br/>
                <select name="grade" id="grade" value={grade} onChange={(e)=>setGrade(e.target.value)} class="border rounded mt-1 p-2 w-full">
                    <option value="S" selected>S</option>
                    <option value="A">AHBFHBFAHBFBFBABBFB</option>
                    <option value="B">B</option>
                </select><br/><br/>
                <label for="issue-date">Issue Date *</label><br/>
                <input type="text" name="issue-date" id="issue-date" placeholder="dd/mm/yyyy" value={date} onChange={(e)=>setDate(e.target.value)} class="border rounded mt-1 p-2 w-full"/><br/><br/><br/>
                <a href='/download'><input type="button" value="Issue Certificate" class="bg-green-300 p-2 border-none rounded"/></a>
            
        </div>
   

   
   </>
  )
}

export default AddCourse