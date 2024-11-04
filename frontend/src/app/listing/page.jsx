'use client'
import data from '@/productData'
import { IconBrandAdobeIndesign, IconBrandSupernova, IconChartArrowsVertical, IconComponents, IconLayoutBottombar, IconList, IconTable } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState } from 'react'


const Listing = () => {

  const [productData, setProductData] = useState(data);


  const displayCards = () => {
    return productData.map((product) => (
      <Link
        className="group relative block rounded-xl focus:outline-none"
        href={"/details/" + product.id}
      >
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
          <img
            className="size-full absolute top-0 start-0 object-cover"
            src={'/images/' + product.image}
            alt="Blog Image"
          />
        </div>
        <div className="absolute top-0 inset-x-0 z-10">
          <div className="p-4 flex flex-col h-full sm:p-6">
            
            
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="flex flex-col h-full p-4 sm:p-6">
            <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
              {product.title}
            </h3>
            <p className="mt-2 text-white/80">
              Marketplace for selling UI/UX design
            </p>
          </div>
        </div>
      </Link>
    ))
  }

  const searchTemplate = (e) => {
    const value = e.target.value;
    setProductData(data.filter(
      template => template.title.toLowerCase().includes(value.toLowerCase())
    ));
  }

  const filterCategory = (category) => {
    setProductData(data.filter(
      template => template.category === category
    ))
  }

  return (
    <>
      <div style={{ backgroundImage: `url("/images/hero.webp")` }}>
        <div className="relative overflow-hidden bg-white/80 backdrop-blur-lg" >
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
                UI/UX Themes for your websites
              </h1>
              <p className="mt-3 text-gray-600">
                For easy accessibility of designs
              </p>
              <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                {/* Form */}
                <form>
                  <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                    <div className="w-full">
                      <label
                        htmlFor="hs-search-article-1"
                        className="block text-sm text-gray-700 font-medium"
                      >
                        <span className="sr-only">Search article</span>
                      </label>
                      <input
                        onChange={searchTemplate}
                        type="text"
                        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Search Wireframe"
                      />
                    </div>
                    <div>
                      <a
                        className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-5"
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
                          <circle cx={11} cy={11} r={8} />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
                {/* End Form */}

              </div>
              <div className="mt-10 sm:mt-20">
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => filterCategory('List')}
                >
                  <IconList />
                  List
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => filterCategory('component')}
                >
                  
                  <IconComponents />
                  Component
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => filterCategory('UI')}
                >
                 <IconBrandSupernova />
                  UI
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => filterCategory('table')}
                >
                 <IconTable />
                  Table
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => filterCategory('footer')}
                >
                  <IconLayoutBottombar />
                  Footer
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={() => filterCategory('statistics')}
                >
                  <IconChartArrowsVertical />
                  Statistics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {displayCards()}
        </div>
      </div>

    </>



  )
}

export default Listing;