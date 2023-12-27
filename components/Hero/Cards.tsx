"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./style.css"
// import Link from "next/link";

import React, { useState, useEffect } from 'react';

const Cards = () => {


  
  return (
  

<section>
<div className="flex flex-row justify-center items-center mt-44 relative" >
<div className="card p-6 relative z-20  " style={{ marginLeft: '-180px', backgroundImage: 'url("./images/blog/blog-01.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '350px', marginTop: '-200px' }}>
 
</div>


  {/* New Background Card */}
<div className="absolute top-0 left-0 flex flex-col items-center bg-white shadow-lg dark:bg-btndark p-2 rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-6 z-30" style={{ width: '300px', height: '80px', marginTop: '-150px',marginLeft:'250px' }}>
  {/* You can adjust the padding to fit the content */}
  <div className="w-full h-full p-2 flex flex-row items-center">
    <img
      src="./images/shape/atandt.png" // Replace with the actual image URL
      alt="Icon"
      className="mr-4 w-10 h-10 rounded-full object-cover" // Adjust the size as needed
    />
    <div className="flex flex-col">
      <h4 className="font-semibold mb-1 textsm">Atoms digital services</h4>
      <p className="text-gray-500 mb-0 text-sm">Description for the new background card.</p>
    </div>
  </div>
</div>
  {/* New Background Card */}
  <div className="absolute top-0 left-0 flex flex-col items-center bg-white shadow-lg dark:bg-btndark p-2 rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-6 z-30" style={{ width: '300px', height: '80px', marginTop: '60px',marginLeft: '200px' }}>
  {/* You can adjust the padding to fit the content */}
  <div className="w-full h-full p-2 flex flex-row items-center">
    <img
      src="./images/shape/atandt.png" // Replace with the actual image URL
      alt="Icon"
      className="mr-4 w-10 h-10 rounded-full object-cover" // Adjust the size as needed
    />
    <div className="flex flex-col">
      <h4 className="font-semibold mb-1 textsm">Atoms digital services</h4>
      <p className="text-gray-500 mb-0 text-sm">Description for the new background card.</p>
    </div>
  </div>
</div>
{/* New Background Card */}
<div className="absolute top-0 left-0 flex flex-col items-center bg-white shadow-lg dark:bg-btndark p-2 rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-6 z-30" style={{ width: '300px', height: '80px', marginTop: '-50px', marginLeft: '-200px' }}>
  {/* You can adjust the padding to fit the content */}
  <div className="w-full h-full p-2 flex flex-row items-center">
    <img
      src="./images/shape/atandt.png" // Replace with the actual image URL
      alt="Icon"
      className="mr-4 w-10 h-10 rounded-full object-cover" // Adjust the size as needed
    />
    <div className="flex flex-col">
      <h4 className="font-semibold mb-1 textsm">Atoms digital services</h4>
      <p className="text-gray-500 mb-0 text-sm">Description for the new background card.</p>
    </div>
  </div>
</div>




 
</div>
    </section>



 
  );
};

export default Cards;

   
  
  
  