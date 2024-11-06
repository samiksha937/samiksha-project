import React from 'react'

const Login
 = () => {
  return (
    <div>
<>
  {/* Hero */}
  <div className="relative overflow-hidden">
    <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8 ">
      <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
        {/* Title */}
        <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          LOGIN  <span className="text-blue-600">team</span>
        </h1>
        <p className="mt-3 text-base text-gray-500">
          MARKETPLACE FOR SELLING UI/UX DESIGN
        </p>
        {/* End Title */}
        
        <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6">
          
        </div>
        {/* Form */}
        <form>
        <div className="mb-4">
            
          </div>
         
          <div className="mb-4">
            <label
             
              className="block text-sm font-medium"
            >
              <span className="sr-only">FIRST_NAME</span>
            </label>
            <input
              type="name"
              id="first-name-1 "
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="FIRST_NAME"
            />
          </div>

          <div className="mb-4">
            <label
             
              className="block text-sm font-medium"
            >
              <span className="sr-only">LAST_NAME</span>
            </label>
            <input
              type="name"
              id="last-name-1 "
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="LAST_NAME"
            />
          </div>

         
          <div className="mb-4">
            <label
              htmlFor="hs-hero-email-2"
              className="block text-sm font-medium"
            >
              <span className="sr-only">Email address</span>
            </label>
            <input
              type="email"
              id="hs-hero-email-2"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-password-2"
              className="block text-sm font-medium"
            >
              <span className="sr-only">Password</span>
            </label>
            <input
              type="password"
              id="hs-hero-password-2"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Password"
            />
          </div>
          <div className="grid">
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Login
            </button>
          </div>
        </form>
        {/* End Form */}
      </div>
    </div>
    <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')] bg-no-repeat bg-center bg-cover" />
    {/* End Col */}
  </div>
  {/* End Hero */}
</>

    </div>
  )
}

export default Login
