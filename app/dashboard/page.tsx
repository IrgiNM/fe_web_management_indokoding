import React from 'react'

const page = () => {
  return (
    <div>
        <div className="w-[220px] gap-2 pt-10 fixed top-0 bottom-0 flex flex-col px-5 bg-[#edc5ff]">
            <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Dashboard</button>
            <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Reimbursement</button>
            <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Karyawan</button>
        </div>
        <div>
            <h1 className='ml-60 pt-5 font-bold text-2xl'>Dashboard Page</h1>
        </div>
        <div className='flex flex-row gap-5 ml-60 px-5 fixed'>
            <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] px-3 py-5 rounded-lg'>
                <p className='text-[12px] font-light bg-[#edc5ff]'>Total Pengajuan</p>
                <p className='text-[22px] font-semibold bg-[#edc5ff]'>34</p>
            </div>
            <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] px-3 py-5 rounded-lg'>
                <p className='text-[12px] font-light bg-[#edc5ff]'>Total Diterima</p>
                <p className='text-[22px] font-semibold bg-[#edc5ff]'>32</p>
            </div>
            <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] px-3 py-5 rounded-lg'>
                <p className='text-[12px] font-light bg-[#edc5ff]'>Total Ditolak</p>
                <p className='text-[22px] font-semibold bg-[#edc5ff]'>1</p>
            </div>
            <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] px-3 py-5 rounded-lg'>
                <p className='text-[12px] font-light bg-[#edc5ff]'>Total Pending</p>
                <p className='text-[22px] font-semibold bg-[#edc5ff]'>2</p>
            </div>
            <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] px-3 py-5 rounded-lg'>
                <p className='text-[12px] font-light bg-[#edc5ff]'>Total Karyawan</p>
                <p className='text-[22px] font-semibold bg-[#edc5ff]'>14</p>
            </div>
        </div>
    </div>
  )
}

export default page