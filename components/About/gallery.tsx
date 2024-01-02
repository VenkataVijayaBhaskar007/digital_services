"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"

const images = [
  "/CardsGallerysection/11.webp",
  "/CardsGallerysection/12.webp",
  "/CardsGallerysection/13.webp",
  "/CardsGallerysection/14.webp",
  "/CardsGallerysection/15.webp",
  "/CardsGallerysection/16.webp",

];


const CardsGallery = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
  };

  return (
    <>
   <section id="home" className=" pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative space" >
  <div className="pad pt-7 sm:pt-16 lg:pt-20 mx-auto w-full h-full">
    <div className=" md:block scale-95  relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="CardsGalleryimage"
                key={index}
                className=" cursor-pointer"
              />
           <div className="CardsGallery-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
             
             
          
           <div className="mt-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
  <p className="max-w-2xl mb-2 font-light text-white textsize1  lg:mb-2  dark:text-gray-400">Welcome to</p>   
            <h1 className="max-w-2xl mb-2 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-8xl text-white dark:text-white">Atoms Group</h1>
            <p className="max-w-2xl mb-4 font-light text-white textsize lg:mb-6  dark:text-gray-400">Creating changemakers who inspire...</p>
           
        </div>
              
    </div>
              <div className="mt-8">
               
               

               
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="block md:hidden scale-95 rounded-lg pt-6 relative">
     
    </div>
  </div>
</section>



















 





    </>
  );
};

export default CardsGallery;
