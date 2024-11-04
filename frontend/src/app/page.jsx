import React from 'react'

const Home = () => {
  return (<>
    <>
      {/* Hero */}
      <div className="bg-gradient-to-b from-violet-600/10 via-transparent ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          {/* Announcement Banner */}
          <div className="flex justify-center ">
            <a
              className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10"
              href="../figma.html"
            >
              <p className="me-2 text-blue text-sm">  Marketplace for designs </p>
              <span className="group-hover:bg-green/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}
          {/* Title */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-dark blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
             MARKETPLACE FOR SELLING UI/UX DESIGN
            </h1>
          </div>
          {/* End Title */}
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white/70">
              Preline is a large open-source project, crafted with Tailwind CSS
              framework by Hmlstream.
            </p>
          </div>
          
        </div>
      </div>
      {/* End Hero */}
    </>

    {/* Approach */}
    <div className="bg-neutral-900">
      {/* Approach */}
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto"  >
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Our approach
          </h2>
          <p className="mt-1 text-neutral-400">
            Discover unique,professionally crafted UI/UX designs.Join our marketplace.
          </p>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="w-full object-cover rounded-xl"
              src="https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjB1eHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Features Image"
            />
          </div>
          {/* End Col */}
          {/* Timeline */}
          <div>
            {/* Heading */}
            <div className="mb-4">
              <h3 className="text-[#ff0] text-xs font-medium uppercase"></h3>
            </div>
            {/* End Heading */}
            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">
                    1. Clear Value Proposition:
                  </span>
                 A one step marketplace for high-quality,UI/UX designs to elevate your digital presence.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">
                    Product Categorization:  
                  </span>
                   Help users to easily find relevant designs.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-neutral-400">
                  <span className="text-white">Filter:  </span>
                  Make it easy to find specific designs quickly.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-neutral-400">
                  <span className="text-white">  </span>
                  
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            
           
            
          </div>
          {/* End Timeline */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Approach */}
    </div>  

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-20 pb-40">
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/15173855/file/original-8ee83181388d873d4035d5c4c90b9de3.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/15677057/file/original-757e3aa391ccba7666952874b8e8de91.jpg?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/14837531/file/original-075d00993fc495b5caaf3cbfc05a6275.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/14096710/file/original-7b901c2dad052c7dbbf7e90d461acfcb.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/15620359/file/original-591c945f75b434a2d840e413c652026c.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/13938569/file/original-d0a10285b2d5a0a641f4000554c1a40d.jpg?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/15445690/file/original-a2dfe345aac0802bb00bed19724827c5.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/15833652/file/original-dedc7a68b8b2087b4a689bfdcdda5958.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/13399016/file/original-ac2786102a42fa794aaf8ae1ea79261d.jpg?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/13522080/file/original-df95f5e113823c9d2b5db50b4d969079.jpg?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/13093132/file/original-170d141ca627f3262ccc1b2fab2cf0d1.jpg?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
      <img
        className="w-full size-40 object-cover"
        src="https://cdn.dribbble.com/userupload/15829360/file/original-3cc016cafc024766dbb5c9c5d04243d9.png?resize=320x240&vertical=center"
        alt="Gallery Image"
      />
    </div>
    <>
    <>
{/* ========== FOOTER ========== */}
  <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto ">
    {/* Grid */}
    <div className="text-center">
      <div>
        <a
          className="flex-none text-xl font-bold text-black"
          href="#"
          aria-label="Brand"
        >
          THANKYOU FOR VISITING OUR WEBSITE
        </a>
      </div>
      {/* End Col */}
      <div className="mt-3">
        <p className="text-black-500">
          We're part of the{" "}
          <a
            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
            href="#"
          >
            Marketplace for UI/UX 
          </a>{" "}
          family.
        </p>
        <p className="text-gray-500">© 2024  Labs.</p>
      </div>
      
    </div>
    {/* End Grid */}
  </footer>
  {/* ========== END FOOTER ========== */}
</>

    </>
  </ >
  )
}
export default Home