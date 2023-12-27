<section className="container lg:w-1/2 bg-white font-poppins dark:bg-btndark" style={{ marginTop: "-3rem" }}>
<div className="max-auto aboutsec px-4">
  <div className="flex flex-wrap">
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -40,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      className="animate_left lg:w-1/1"
    >
      <div className="lg:order-2 px-4">
        <h1 className="text2xl lg:text-5xl-heading px-3 mb-4 font-regular text-black">
          Build your desired website in no time
        </h1>
        <div className="px-3">
          <p>
            We are pleased to announce that Atoms Software Solutions, a prominent branch within the Atoms Group, is
            making significant strides in the realm of software solutions. Our focus revolves around crafting innovative
            web applications and creating exceptional UI/UX designs. As part of our commitment to excellence, we actively
            contribute to the success of various ventures. Join us on our journey as Atoms Software Solutions continues
            to evolve and make substantial contributions in the dynamic field of software solutions....
          </p>
        </div>
      </div>
    </motion.div>
    <div className="flex space-x-8 ml-2 px-4">
      {/* Left Section */}
      <div className="space-y-4 mt-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
          </div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed">
            Create Android or iOS retail and ecommerce apps, no coding skills required
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
          </div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed">
            Guaranteed price and clear timelines for your app project
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img src="./images/shape/check-circle.png" alt="Tick Icon" className="w-5 h-5" />
          </div>
          <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed">
            Keep your custom retail solution up-to-date and bug-free with 24/7 support
          </div>
        </div>
      </div>
    </div>
    {/* Right Section - Image */}
    <img
      src="./images/about/about-dark-01.png" // Replace with the actual image URL
      alt="Description of the image"
      className="lg:order-1 lg:w-1/2 px-4"
    />
  </div>
  <div className="px-4 flex flexshape md:flex-column">
    <button
      className="mt-8 mb-10 md-w-1/2 bg-white text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out mr-4"
    >
      Get Started
    </button>
    <button
      className="mt-8 mb-10 bg-blue-600 text-white hover:text-blue-600 hover: border border-blue-600 hover:bg-white hover:-translate-y-1 shadow-md hover:shadow-lg transform hover:scale-x-105 px-6 py-2 rounded-full transition duration-300 ease-in-out"
    >
      See pricing plans
    </button>
  </div>
</div>
</section>