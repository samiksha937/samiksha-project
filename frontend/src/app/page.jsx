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
                {/* Collapse Button */}
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
                {/* End Collapse Button */}
              </div>
              {/* Collapse */}
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
                        {/* Dropdown */}
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
                        {/* End Dropdown */}
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
                    {/* Button Group */}
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
                    {/* End Button Group */}
                  </div>
                </div>
              </div>
              {/* End Collapse */}
            </nav>
          </header>
          {/* ========== END HEADER ========== */}
        </>
      </>

      <>
        {/* Hero */}
        <div className="bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="font-semibold text-white text-5xl md:text-6xl">
              <span className="text-[#ff0]">MARKETPLACE:</span> For selling UI/UX
              designs
            </h1>
            <div className="max-w-4xl">
              <p className="mt-5 text-neutral-400 text-lg">
                At MARKETPLACE FOR SELLING UI/UX DESIGNS, we are passionate about creating user-centric designs
                that not only look great but deliver seamless, intuitive experiences. Our UI/UX design services
                are tailored to meet the unique needs of businesses, helping them connect with their audience,
                increase engagement, and drive results. We believe that a well-crafted design can transform the
                way users interact with your brand, enhancing both functionality and aesthetics to ensure every
                click counts. Let us help you build digital products that are not only visually appealing but
                also highly effective and user-friendly.
              </p>
            </div>
          </div>
        </div>
        {/* End Hero */}
        {/* Clients */}
        <div className="relative overflow-hidden pt-4 bg-neutral-900">
          <svg
            className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
            width={2745}
            height={488}
            viewBox="0 0 2745 488"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
            <path
              d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
              className="stroke-neutral-700/50"
              stroke="currentColor"
            />
          </svg>
          <div className="relative z-10">
            <div className="max-w-5xl px-4 xl:px-0 mx-auto">
              <div className="mb-4">
                <h2 className="text-neutral-400">
                  
                </h2>
              </div>
              <div className="flex justify-between gap-6">
                <svg
                  className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
                  enableBackground="new 0 0 2499 614"
                  viewBox="0 0 2499 614"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
                  width={2500}
                  height={607}
                >
                  <path
                    d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2428 1002"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127 33"
                >
                  <path
                    d="M9.3 16.5C9.3 9 14.3 2.7 21.2.7a16.5 16.5 0 1 0 0 31.6c-6.9-2-11.9-8.3-11.9-15.8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.7 10c4 0 7.4 2.8 8.5 6.4a8.9 8.9 0 1 0-17 0c1-3.6 4.4-6.3 8.5-6.3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M24.8 19.4c0 3-2 5.5-4.8 6.3A6.6 6.6 0 1 0 20 13c2.8.8 4.8 3.4 4.8 6.4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M39.6 13.5A4.4 4.4 0 0 1 44 9.1h1.3v2.7l-1 .2-1 .6-.2.4-.1.5h2.3v3H43v9.2h-3.4v-9.3h-1.3v-2.9h1.3ZM55.7 13.5h3.4v6.1a6.9 6.9 0 0 1-1.7 4.6 6 6 0 0 1-4.5 1.8c-1 0-1.8-.1-2.5-.5a6 6 0 0 1-3.2-3.4c-.3-.8-.4-1.6-.4-2.5v-6H50v6c0 .5 0 1 .2 1.3l.5 1c.2.4.5.6.9.8.3.2.8.3 1.2.3a2.6 2.6 0 0 0 2.1-1c.3-.3.4-.7.5-1l.2-1.4v-6ZM61.2 25.7V9.5h3.4v16.2h-3.4ZM66.9 25.7V9.5h3.3v16.2H67ZM78.5 21.2l3.3-7.7h3.7l-5.7 12.2h-2.7l-5.6-12.2H75l3.4 7.7ZM87 13.5h3.3v12.2H87V13.5Zm1.6-5 .8.1.6.4.4.7.2.7a1.9 1.9 0 0 1-.6 1.4l-.6.4a2 2 0 0 1-.8.1c-.5 0-1-.2-1.3-.5a2 2 0 0 1-.4-2.1c0-.3.2-.5.4-.7l.6-.4.7-.1ZM98.8 13.2a6.7 6.7 0 0 1 4.8 1.9 6.3 6.3 0 0 1 1.9 5.7h-9.8a3.3 3.3 0 0 0 3.2 2.2c.5 0 1-.1 1.4-.4.5-.2.9-.5 1.2-1h3.7c-.2.7-.5 1.3-1 1.8a6.1 6.1 0 0 1-3.3 2.3 7 7 0 0 1-6.9-1.6 6.1 6.1 0 0 1-2-4.5 6.1 6.1 0 0 1 2-4.5c.7-.6 1.4-1 2.2-1.4.8-.3 1.7-.5 2.6-.5Zm3.2 5.2c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.3-.7-2-.7s-1.4.3-2 .7c-.5.4-.9.9-1.1 1.5h6.3ZM123 13.5h3.6l-5 12.2H119l-2.5-6.5-2.5 6.5h-2.7l-5-12.2h3.6l2.7 7 2.8-7h2.2l2.8 7 2.7-7Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  y={0}
                  viewBox="0 0 88 22"
                  xmlSpace="preserve"
                  enableBackground="new 0 0 88 22"
                >
                  <path
                    d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z"
                    fill="currentColor"
                  />
                  <path d="M37.7 0H40.8V17.1H37.7z" fill="currentColor" />
                  <path
                    d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2"
                    fill="currentColor"
                  />
                  <path
                    d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z"
                    fill="currentColor"
                  />
                  <path
                    d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* End Clients */}
      </>
      <>
        {/* Approach */}
        <div className="bg-neutral-900">
          {/* Approach */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Our approach
              </h2>
              <p className="mt-1 text-neutral-400">
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
                  <h3 className="text-[#ff0] text-xs font-medium uppercase">Steps</h3>
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
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">Marketing and Promotion:</span>
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
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white">Launch and Optimization:</span>
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
                  className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
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
                    <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
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
                      className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
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
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
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
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
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
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
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
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
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