"use client";
import { useRouter } from "next/navigation";
import React from 'react'

const page = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="font-bold text-2xl font-['Poppins'] tracking-tight">Login to your account</h1>
        <h1 className="font-['Poppins'] tracking-tight">Welcome back, select method to login</h1>
      </div>
      <button
        // onClick={handleGoogleLogin}
        className="font-semibold border border-gray-700 text-sm rounded-md focus:ring-black focus:border-black block w-96 p-3 mb-6"
      >
        {/* <Image src="/google.svg" alt="Google" width={20} height={20} /> */}
        Google
      </button>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-3 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#F5F5F5] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-3 mb-6"
        />
      </div>
      <button onClick={()=>{router.push("/dashboard");}} className="flex items-center justify-center gap-3 bg-[#343135] text-white px-43 py-3 rounded-md font-semibold shadow-md hover:bg-[#171617] transition">Login</button>
    </div>
  )
}

export default page