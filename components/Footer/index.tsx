import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer className='relative dark:bg-blacksection bg-blacksection '>
      <div className="py-4 px-4 md:py-10">
        <div className="max-w-10xl mx-auto  sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-0 md:mb-0">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2 mt-3">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Atoms Digital Solutions">
                <img className=" max-w-full mx-auto md:max-w-none h-auto" src="./images/logo/Atoms-Digital-White.png" width={100} height={60} alt="Features 02" />
                </Link>
              </div>
              <div className="text-gray-400  hover:text-gray-100 transition duration-150 ease-in-out z-999">Stay connected with Atoms Software Services, a pioneering branch of the Atoms Group, as we make strides in software services. Explore innovative web applications and exceptional UI/UX designs. Committed to excellence, we actively contribute to the success of ventures. Join us on our evolving journey in the dynamic field of software services.</div>
            </div>
            <div className="order-1 md:order-2 flex  justify-center sm:mt-0 mr-0 md:ml-25 z-999">
            <div className="container ">
    <div className=" flex justify-center">
    <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4"
  fill="white"
  viewBox="0 0 24 24">
  <path
    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
      </a>
      <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200" style={{marginTop:"1px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-4 w-4"  fill="white" viewBox="0 0 50 50">
<path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
</svg>
      </a>
      <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4"
  fill="white"
  viewBox="0 0 24 24">
  <path
    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
</svg>

      </a>
      <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-4"
          fill="white"
          viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
      <a href="#!" className="mr-6 text-neutral-800 dark:text-neutral-200" style={{marginTop:"-2px"}}>
      <svg
  width="23"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
    fill="white"
  />
</svg>
    
      </a>
    </div>
  </div>
            </div>
            {/* 2nd, 3rd, and 4th blocks */}
            <div className="grid grid-cols-2 md:col-span-8 lg:col-span-7 sm:grid-cols-4 gap-4">

              {/* 2nd block */}
              <div className="text-sm">
                <Link href="https://www.atomsgroup.net/"><h6 className="text-gray-200 font-bold mb-1">Atoms Group</h6></Link>
                <ul>
                  
                  {/* ... list items ... */}
                  <li className="mb-1">
                    <Link href="https://education.atomsgroup.net/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Atoms Education</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://atomsdigitalsolutions.atomsgroup.net/" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out">Atoms Digital Solutions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://atoms2.0.atomsgroup.net/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out ">Atoms 2.0</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"></Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
               <Link href="https://atomsdigitalsolutions.atomsgroup.net/"> <h6 className="text-gray-200 font-bold mb-1">Atoms Digital Solutions</h6></Link>
                <ul>
                 
                  {/* ...list items ... */}
                  <li className="mb-1">
                    <Link href="https://digitalmarketingservices.atomsgroup.net/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Digital Marketing Services</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://softwareservices.atomsgroup.net/" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out">Software Services</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://visualmedia.atomsgroup.net/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual Media</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"></Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
               <Link href="https://education.atomsgroup.net/"> <h6 className="text-gray-200 font-bold mb-1">Atoms Education</h6></Link>
                <ul>
                  
                  {/* ...list items ... */}
                  <li className="mb-1">
                    <Link href="https://education.atomsgroup.net/section1" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Personality Development Program</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://education.atomsgroup.net/section2" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out">The Acumen Club</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://education.atomsgroup.net/section3" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Atoms Tutions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://education.atomsgroup.net/section4" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out">Atoms Summer Camps</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://education.atomsgroup.net/section5" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Placement Assistance Packages</Link>
                  </li>
                </ul>
              </div>
              {/* 4th block */}
              <div className="text-sm">
                <Link href="https://atoms2.0.atomsgroup.net/"><h6 className="text-gray-200 font-bold mb-1 z-999">Atoms 2.0</h6></Link>
                <ul>
                  
                  {/* ... list items ... */}
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out z-999">Engineers Scoops</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out z-999">MJ Saloon & Spa</Link>
                  </li>
               
                </ul>
              </div>

            </div>

          </div>

          

          {/* Bottom area */}
          <hr className="my-6 border-gray-200  dark:border-gray-700 lg:my-8" />

      <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <a href="https://atomsdigitalsolutions.atomsgroup.net/" className="order-2 md:order-1 mt-8 md:mt-0 z-999 hover:text-cyan-400"> &copy;   Made with ❤️ by Atoms Digital Solutions </a>
            <div className="order-1 md:order-2 flex mt-4 justify-center sm:mt-0 z-999 mr-0 md:mr-15">
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
            </div>
        </div>
  
        </div>
       
      </div>
     
    <div>
          <span className="absolute bottom-0 left-0 z-[1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="cyan" stopOpacity="100" />
                  <stop offset={1} stopColor="blue" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute -right-12 -top-16  z-[1]" >
        <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    {/* Defining the diagonal linear gradient */}
    <linearGradient id="myGradient" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="10%" stopColor="#2E71C3" />
      <stop offset="90%" stopColor="#42ffff" />
    </linearGradient>
  </defs>

  {/* Drawing a circle with the defined diagonal linear gradient and reduced opacity */}
  <circle cx="75" cy="75" r="70" fill="url('#myGradient')" opacity="1" />
</svg>
          </span>
    </div>


    </footer>
    
</>
  );
}
