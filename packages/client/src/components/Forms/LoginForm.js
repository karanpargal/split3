import React from 'react'

const LoginForm = () => {
  return (
    <div className="h-screen ">
    <div class="  m-auto max-w-2xl pt-6 h-72  text-black   ">
      <div class=" flex flex-col  justify-center item-center border  rounded px-10 pt-2 pb-2 ">
        <h1 className="block text-black text-2xl font-bold mb-2">
         Log In
        </h1>
        <div class="mb-4 mt-2 ">
          <label
            class="block mb-2  text-black text-lg font-semibold "
            for="UserName"
          >
            User Name
          </label>
          <input
            className=" appearance-none mb-4  border rounded w-full py-2 px-3 text-gray-700 leading-tight "
            id="title"
            type="text"
            placeholder="John Doe"
          ></input>
         
          <label
            class="block text-black text-lg font-semibold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className=" appearance-none mb-4  border w-full py-2 px-3 text-gray-700 "
            id="password"
            type="password"
            placeholder="****************"
          ></input>
          <div className='flex justify-end mt-4 '>
          <button className="text-black border px-2 p-1 rounded-md " onClick={() => {
           
        }}>
          Log in
        </button>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginForm