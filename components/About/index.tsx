"use client";
import FeatureSection from "./Cards";
import { motion } from "framer-motion";
import { useSpring } from 'react-spring';
import "./style.css"

const About = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });

  return (
    <>
    <section className="my-4" style={{ marginTop: "8rem" }}>
  {/* First Card */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: -40,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.5 }}
  
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
    {/* Image on the Left */}
    <div className="lg:order-1 lg:w-1/2 lg:pr-4 ">
      <img
        src="./images/about/about-dark-01.png" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-4 text-left full-text" >
      {/* <h4 className="font-medium uppercase text-blue-600 dark:text-white px-3">
        Welcome to
      </h4> */}
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-hero nowraps">
        <span className="text-content">Digital Marketing Services</span>
      </h2>
      <div className="px-3">
        <p>
        Atoms Digital Solutions presents Atoms Visual Media, a specialized wing offering exceptional photography and videography services. Our passionate and talented team covers a wide range of events, from birthdays and weddings to corporate gatherings. We go beyond the ordinary to capture precious moments, ensuring lasting memories through our creative and remarkable work...
        </p>
      </div>
      <div className="flex space-x-8 ml-2">
  {/* Left Section */}
  <div className="space-y-4 mt-4">
    
    <div className="flex items-center space-x-4">
      {/* Tick mark icon on the left */}
      <div className="flex-shrink-0">
        {/* SVG insertion for the tick mark */}
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>

      {/* Content on the right */}
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Security Measures
      </div>
    </div>

    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Value for Money
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
      Quality Content
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
     Experienced Designers
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="space-y-4 mt-4">
    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Custom Designs
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
      Content Writing 
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
      User-centric Design 
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
      Specialized Ad Campaigns
      </div>
    </div>
  </div>
</div>

    <div className="px-4 flex  flexshape md:flex-column">
  <a href="/support"
    className="mt-8 mb-10 md-w-1/2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out mr-4"
  >
    Contact Us
  </a>

  <a href="/team"
    className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
  >
   Our team
  </a>

</div>
    </div>
  </motion.div>
</section>


 
    <FeatureSection/> 



    <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
       
          
                     
<motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
         
    className="animate_left"
  >      

<div className="flex items-center justify-center">
      <h2 className="text-center mb-6 text-2xl font-bold text-black dark:text-white xl:text-3xl 2xl:text-4xl  ">
  <span className="text-content  nowraps">Our Clients</span>
</h2>


</div>
</motion.div>



       <div className="logos" >
               <div className="logos-slide" >
              
       
       
           <img src="./images/clients/1.png" alt="client-1 logo image" />
       
       
       
           <img src="./images/clients/2.png" alt="client-2 logo image" />
       
       
       
           <img src="./images/clients/3.png" alt="client-3 logo image" />
       
       
       
           <img src="./images/clients/4.png" alt="client-4 logo image" />
       
       
       
           <img src="./images/clients/5.png" alt="client-5 logo image" />
       
       
       
           <img src="./images/clients/6.png" alt="client-6 logo image" />
       
       
       
           <img src="./images/clients/7.png" alt="client-7 logo image" />
       
       
       
           <img src="./images/clients/8.png" alt="client-8 logo image" />
       
       
       
           <img src="./images/clients/9.png" alt="client-9 logo image" />
       
       
       
       
           <img src="./images/clients/10.png" alt="client-10 logo image" />
       
       
       
       
           <img src="./images/clients/11.png" alt="client-11 logo image" />
       
       
       
       
           <img src="./images/clients/12.png" alt="client-12 logo image" />
       
       
       
       
           <img src="./images/clients/13.png" alt="client-13 logo image" />
       
       
       
       
           <img src="./images/clients/14.png" alt="client-14 logo image" />
       
       
       
       
           <img src="./images/clients/15.png" alt="client-15 logo image" />
       
       
       
       
           <img src="./images/clients/16.png" alt="client-16 logo image" />
       
       
       
       
           <img src="./images/clients/17.png" alt="client-17 logo image" />
       
       
       
       
           <img src="./images/clients/18.png" alt="client-18 logo image" />
       
       
       
       
           <img src="./images/clients/19.png" alt="client-19 logo image" />
       
       
       
       
           <img src="./images/clients/20.png" alt="client-20 logo image" />
       
       
       
       
           <img src="./images/clients/21.png" alt="client-21 logo image" />
       
       
       
       
           <img src="./images/clients/22.png" alt="client-22 logo image" />
       
       
       
       
           <img src="./images/clients/23.png" alt="client-23 logo image" />
       
       
       
       
           <img src="./images/clients/24.png" alt="client-24 logo image" />
       
       
       
       
           <img src="./images/clients/25.png" alt="client-25 logo image" />
       
       
       
       
           <img src="./images/clients/26.png" alt="client-26 logo image" />
       
       
       
       
           <img src="./images/clients/27.png" alt="client-27 logo image" />
       
       
       
       
           <img src="./images/clients/28.png" alt="client-28 logo image" />
       
       
       
       
           <img src="./images/clients/29.png" alt="client-29 logo image" />
       
       
       
       
           <img src="./images/clients/30.png" alt="client-30 logo image" />
       
       
       
       
           <img src="./images/clients/31.png" alt="client-31 logo image" />
       
       
       
       
           <img src="./images/clients/32.png" alt="client-32 logo image" />
       
       
       
       
           <img src="./images/clients/33.png" alt="client-33 logo image" />
       
       
       
       
           <img src="./images/clients/34.png" alt="client-34 logo image" />
       
       
       
       
               
         </div>
       
        
       </div>
       
       </section>


       <section className="my-5">
  <div className="flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-black">Price & Menu</h1>
    </div>
  </div>

  <div className="mx-auto justify-center items-center flex flex-col md:flex-row gap-20 p-4 lg:p-10">
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/1.png" alt="Menu 1" />
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/2.png" alt="Menu 2" />
  </div>
  <div className="mx-auto justify-center items-center flex flex-col md:flex-row gap-20 p-4 lg:p-10">
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/3.png" alt="Menu 1" />
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/4.png" alt="Menu 2" />
  </div>
  <div className="mx-auto justify-center items-center flex flex-col md:flex-row gap-20 p-4 lg:p-10">
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/5.png" alt="Menu 1" />
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/6.png" alt="Menu 2" />
  </div>
</section>
</>
);
};

export default About;