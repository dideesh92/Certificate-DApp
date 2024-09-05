import React, { useEffect, useState } from 'react';
import img1 from '../assets/kbalogo.png';
import { Link, useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";

const Dappdownload = () => {
    const provider = new BrowserProvider(window.ethereum);
    const [certificate, setCertificate] = useState({});
    const { id } = useParams();
    

    useEffect(() => {
        
        const search = async (searchid) => {
            const signer = await provider.getSigner();
            const instance = new Contract(CertModuleCert, abi, signer);
            const result = await instance.Certificates(searchid);
            console.log(result);
            console.log(`searchid: ${searchid}`);

            setCertificate({
                name: result[0],
                coursename: result[1],
                grade: result[2],
                date: result[3],
            });
        };
        if (id) {
            search(id);
        }
    }, [id]);

    return (
        <>

<div className="max-w-4xl mx-auto my-12 p-4 bg-gradient-to-r from-blue-800 via-gray-500 to-green-200 rounded-xl shadow-lg border border-gray-300">
    <div className="border border-gray-300 p-12 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h5 className="text-center font-serif text-3xl font-extrabold text-blue-800 mb-8 tracking-wide">
            Kerala Blockchain Academy
        </h5>
        <img src={img1} className="mx-auto w-48 h-auto rounded-xl" alt="Kerala Blockchain Academy Logo" />
        
        <div className="text-center mt-8 mb-8 space-y-6">
            <p className="font-serif text-m text-gray-800 font-semibold">
                This is to certify that <span className="text-blue-800 font-bold">{certificate.name}</span> has successfully completed 
                <span className="text-blue-800 font-bold"> {certificate.coursename}</span> with a grade of 
                <span className="text-blue-800 font-bold"> {certificate.grade}</span>
            </p>
            
            <p className="font-serif text-xl font-medium text-gray-900 mt-6">
                <span className="block text-lg text-gray-700">on {certificate.date}</span>
                <span className="block mt-2 text-lg text-blue-800 font-semibold">Authorized by Kerala Blockchain Academy</span>
            </p>
        </div>
    </div>
</div>
<button className='bg-blue-500 text-white px-4 py-2 ml-[48%] rounded-xl' onClick={window.print}>Print</button>


        </>
    );
}

export default Dappdownload;
