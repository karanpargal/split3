import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='relative w-screen h-[80px] z-10 bg-yellow drop-shadow-lg'>
        <div className='flex  items-center w-full h-full px-2 '>
          <div className='flex flex-col ml-20 justify-start text-4xl  '>
            Split3

          </div>
          <div className='flex m-auto'>
            <div className='flex flex-row space-x-6 text-lg'>
              <div className='bg-white p-1 px-3 rounded-md  shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>
                Home
              </div>
              <div className='bg-white p-1 px-3  rounded-md  shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>
                Services
              </div>
              <div className='bg-white p-1 px-3  rounded-md  shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>
                Dashboard
              </div>

              
                 
              </div>

            </div>
            <div className='flex text-lg'>
                <div className='flex flex-row mr-16 space-x-4'>
                  <button className='bg-white p-1 px-3 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>Log in</button>
                  <button className='bg-white p-1 px-3 rounded-md  shadow-[5px_5px_0px_0px_rgba(0,0,0)]'>Sign in</button>

                </div>

          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar