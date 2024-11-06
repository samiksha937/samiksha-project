import React from 'react'

const Home = () => {
  return (
    <div>
      <>
        <>
          {/* ========== HEADER ========== */}
          <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
            <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center gap-x-1">
                <a
                  className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                  href="#"
                  aria-label="Brand"
                >
                  Brand
                </a>
                
                <button
                  type="button"
                  className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-header-base-collapse"
                  aria-expanded="false"
                  aria-controls="hs-header-base"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-header-base"
                >
                  <svg
                    className="hs-collapse-open:hidden size-4"
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
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block shrink-0 hidden size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span className="sr-only">Toggle navigation</span>
                </button>
             
              </div>
        
              <div
                id="hs-header-base"
                className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
                aria-labelledby="hs-header-base-collapse"
              >
                <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                  <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                    <div className="grow">
                      <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                        <a
                          className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                          aria-current="page"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                          Landing
                        </a>
                        
                        <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                          <button
                            id="hs-header-base-dropdown"
                            type="button"
                            className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            <svg
                              className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                              <path d="m3 10 2.5-2.5L3 5" />
                              <path d="m3 19 2.5-2.5L3 14" />
                              <path d="M10 6h11" />
                              <path d="M10 12h11" />
                              <path d="M10 18h11" />
                            </svg>
                            Dropdown
                            <svg
                              className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                          <div
                            className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-header-base-dropdown"
                          >
                            <div className="py-1 md:px-1 space-y-0.5">
                              <a
                                className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                About
                              </a>
                              <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                                <button
                                  id="hs-header-base-dropdown-sub"
                                  type="button"
                                  className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                >
                                  Sub Menu
                                  <svg
                                    className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
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
                                    <path d="m6 9 6 6 6-6" />
                                  </svg>
                                </button>
                                <div
                                  className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:!mx-[10px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-[18px] after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="hs-header-base-dropdown-sub"
                                >
                                  <div className="p-1 space-y-1">
                                    <a
                                      className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                      href="#"
                                    >
                                      About
                                    </a>
                                    <a
                                      className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                      href="#"
                                    >
                                      Downloads
                                    </a>
                                    <a
                                      className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                      href="#"
                                    >
                                      Team Account
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <a
                                className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Downloads
                              </a>
                              <a
                                className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                href="#"
                              >
                                Team Account
                              </a>
                            </div>
                          </div>
                        </div>
                
                        <a
                          className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                          </svg>
                          Account
                        </a>
                        <a
                          className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                            <path d="M12 12h.01" />
                            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                            <rect width={20} height={14} x={2} y={6} rx={2} />
                          </svg>
                          Work
                        </a>
                        <a
                          className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                            <path d="M18 14h-8" />
                            <path d="M15 18h-5" />
                            <path d="M10 6h8v4h-8V6Z" />
                          </svg>
                          Blog
                        </a>
                      </div>
                    </div>
                    <div className="my-2 md:my-0 md:mx-2">
                      <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300" />
                    </div>
              
                    <div className=" flex flex-wrap items-center gap-x-1.5">
                      <a
                        className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                        href="#"
                      >
                        Sign in
                      </a>
                      <a
                        className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
              
                  </div>
                </div>
              </div>
      
            </nav>
          </header>
          {/* ========== END HEADER ========== */}
        </>
      </>

      <>
        {/* Hero */}
        <div className="relative min-h-dvh bg-cover bg-center" style={{ backgroundImage: "url('\Bg.jpg')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:mt-16">
                <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-wide flex flex-col text-white">
                    <span className='text-4xl md:text-4xl lg:text-6xl xl:text-7xl text-left font-[play] pl-[3px] md:pl-3'>Inspiring</span>
                    <span className="block text-6xl md:text-7xl lg:text-9xl font-[me-reg] text-center">VISUAL</span>
                    <span className='font-[me-reg] text-right text-xl sm:text-lg md:text-2xl xl:text-3xl -mt-1.5'>NARRATIVES</span>
                </h1>
                <p className="text-white relative -right-[10.5%] sm:-right-[4%] md:-right-[5%] lg:-right-[10%] xl:-right-[8.3%] text-base md:text-lg lg:text-xl font-[play]">
                    Elevate Your Brand
                    <br />
                    with Stunning
                    <br />
                    Visuals...
                </p>
            </div>
            <div className="text-white hidden sm:block tracking-[0.2em] absolute bottom-2/4 left-5 md:left-[10%] xl:left-44 text-sm md:text-base lg:text-lg font-[mont]">
                DESIGN
            </div>
            <div className="text-white hidden sm:block tracking-[0.2em] absolute bottom-2/4 right-5 md:right-[5%] xl:right-44  text-sm md:text-base lg:text-lg font-[mont]">
                INNOVATE
            </div>
        </div>

        {/* End Hero */}
       
      </>
      <>
        {/* Approach */}
        <div className="">
          {/* Approach */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className=" text-black font-semibold text-2xl md:text-4xl md:leading-tight">
                Our approach
              </h2>
              <p className="mt-1  text-black">
             Marketplace for selling UI/UX design services should focus on clarity, professionalism, and user engagement.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Features Image"
                />
              </div>
              {/* End Col */}
              {/* Timeline */}
              <div>
                {/* Heading */}
                <div className="mb-4">
                  <h3 className="text-gray-700 text-xs font-medium uppercase">Steps</h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-700 font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-black">
                      <span className="text-black ">
                      1. Clear Value Proposition:
                      </span>
                      Immediately communicate the core value of your service,
                      such as “Creating Seamless, User-Centered Designs for Your Digital Success
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
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-700 font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-black">
                      <span className="text-black">
                        Product Development and Testing:
                      </span>
                      Develop digital products or services that address the needs and
                      preferences of your target audience.
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
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-700 font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-black">
                      <span className="text-black">Marketing and Promotion:</span>
                      Develop a comprehensive marketing strategy to promote your
                      digital products or services.
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
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-700 font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-black">
                      <span className="text-black">Launch and Optimization:</span>
                      Launch your digital products or services to the market, closely
                      monitoring their performance and user feedback.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  href="#"
                >
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    />
                  </svg>
                  visit designs
                </a>
              </div>
              {/* End Timeline */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Approach */}
      </>
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
        {/* ========== FOOTER ========== */}
        <footer className="mt-auto bg-gray-900 w-full">
          <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div className="col-span-full lg:col-span-1">
                <a
                  className="text-white flex-none text-xl font-semibold text-black focus:outline-none focus:opacity-80"
                  href="#"
                  aria-label="Brand"
                >
                  Marketplace for selling UI/UX designs
                </a>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Product</h4>
                <div className="mt-3 grid space-y-3">
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      Changelog
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      Docs
                    </a>
                  </p>
                </div>
              </div>
              {/* End Col */}
              <div className="col-span-1">
                <h4 className="font-semibold text-gray-100">Company</h4>
                <div className="mt-3 grid space-y-3">
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      About us
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      Blog
                    </a>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      Careers
                    </a>{" "}
                    <span className="inline-block ms-1 text-xs bg-blue-700 text-black py-1 px-2 rounded-lg">
                      We're hiring
                    </span>
                  </p>
                  <p>
                    <a
                      className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      Customers
                    </a>
                  </p>
                </div>
              </div>
              {/* End Col */}
              <div className="col-span-2">
                <h4 className="font-semibold text-gray-100">Stay up to date</h4>
                <form>
                  <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                    <div className="w-full">
                      <label htmlFor="hero-input" className="sr-only">
                        Subscribe
                      </label>
                      <input
                        type="text"
                        id="hero-input"
                        name="hero-input"
                        className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Enter your email"
                      />
                    </div>
                    <a
                      className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-black hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Subscribe
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">
                    New UI kits or big discounts. Never spam.
                  </p>
                </form>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">
                  © 2022 Preline. All rights reserved.
                </p>
              </div>
              {/* End Col */}
              {/* Social Brands */}
              <div>
                <a
                  className=" text-white size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  className="size-10 text-white  inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </a>
                <a
                  className="size-10 text-white inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  className="text-white size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  className="text-white size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                  </svg>
                </a>
              </div>
              {/* End Social Brands */}
            </div>
          </div>
        </footer>
        {/* ========== END FOOTER ========== */}
      </>

    </div>
  )
}

export default Home