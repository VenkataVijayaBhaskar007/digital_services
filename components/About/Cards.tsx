// FeatureSection.tsx

import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const featuresData: Feature[] = [

  {
    id: 1,
    icon: "/images/icon/2.png",
    title: "Digital Marketing",
    description:
      "Boost your brand online with strategic digital marketing solutions for success.",
  },
  {
    id: 2,
    icon: "/images/icon/3.png",
    title: "Social Media Marketing",
    description:
      "Elevate your brand with targeted and engaging social media strategies.",
  },
  {
    id: 3,
    icon: "/images/icon/4.png",
    title: "Social media Management",
    description:
      "Optimize brand presence with expert social media management for impactful engagement.",
  },
  {
    id: 4,
    icon: "/images/icon/1.png",
    title: "Logo Design",
    description:
      "Crafting unique brand identities through professional and creative logo design.",
   
  },
  {
    id: 5,
    icon: "/images/icon/5.png",
    title: "Documentation",
    description:
      "Streamline efficiency and clarity through meticulous and professional documentation services.",
  },
  {
    id: 6,
    icon: "/images/icon/6.png",
    title: "Report Making",
    description:
      "Create impactful reports with precision and clarity for informed decision-making.",
  },
  
];

const SingleFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
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
         
        className="animate_top z-40 rounded-lg border border-white bg-white  p-7.5 shadow-solid-3 transition-all hover:shadow-blue-200 hover:-translate-y-11 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
       
        <a href=""
    className="inline-block mt-4 px-4 py-2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 rounded-full transition duration-300 ease-in-out mr-4"
  >
  Get Service
  </a>
      </motion.div>
    </>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className=" " >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Remove SectionHeader and add your own content */}
         
          {/* <!-- Section Title End --> */}

          <div className=" grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 ">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default FeatureSection;
