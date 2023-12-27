"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      {/* <!-- ===== SignIn Form Start ===== --> */}
      <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="font-verdana text-xl text-purple-600 mb-2">Our Services</div>
            <h2 className="h2 mb-4">What we do</h2>
            <p className="text-xl text-gray-400">We provide better services with value added to your projects and also with greater value for the money. You can check with our clients and also by the testimonial and reviews below. Every service provided below will be like a blueprint for your reference...</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>

            {/* Add similar card structures for the other items */}
            {/* 2nd item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}
            
            {/* 3rd item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}

            {/* 4th item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/webdevelopment">View More</a>
            </div>
            {/* ... */}

            {/* 5th item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}

            {/* 6th item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}

            {/* 7th item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}

            {/* 8th item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}

            {/* 9th item */}
            <div className="relative flex flex-col items-center bg-white p-6 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 hover:bg-purple-100" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 text-purple-600 hover:text-purple-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-200" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-400" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-purple-600 hover:text-purple-800">Instant Features</h4>
              <p className="text-lg text-gray-500 text-center mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
              <a className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white hover:text-purple-800 bg-purple-600 hover:bg-white border-2 border-purple-600 rounded-full" href="/your-link">View More</a>
            </div>
            {/* ... */}

          </div>

        </div>
      </div>
    </section>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
};

export default Signin;
