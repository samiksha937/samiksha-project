'use client';
import data from '@/productData'
import { IconApps } from '@tabler/icons-react';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const Details = () => {

  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(data.find(product => product.id == id));

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = 'http://localhost:3000/designs/'+productDetail.filename;
    link.setAttribute(
      'download',
      productDetail.filename,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  }

  return (
    <div><>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="aspect-w-16 aspect-h-7">
          <img
            className="w-full object-cover rounded-xl"
            src={'/images/' + productDetail.image}
            alt="Features Image"
          />
        </div>
        {/* Grid */}
        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
              {productDetail.title}
            </h2>
            <p className="mt-2 md:mt-4 text-gray-500">
              {productDetail.description}
            </p>
          </div>
          {/* End Col */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* Icon Block */}
              <div className="flex gap-x-5">
                <IconApps />
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Platform
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {productDetail.platform}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <IconApps />
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Category
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {productDetail.category}
                  </p>
                </div>
              </div>


            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* Icon Block */}
              <div className="flex gap-x-5">
                <IconApps />
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Tags
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {productDetail.tags}
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <IconApps />
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Publish Date
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {productDetail.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        <div>

          <button className="bg-blue-500 text-white rounded-md mt-10 p-5 pointer" onClick={downloadFile}>Download Now</button>

        </div>

      </div>
      {/* End Features */}
    </>
    </div>
  )
}

export default Details