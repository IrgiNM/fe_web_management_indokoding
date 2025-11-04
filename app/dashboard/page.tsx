import React from 'react'

const page = () => {
    const data = [
        {
            id: 1, 
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 2, 
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 3, 
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 4, 
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 5, 
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 6, 
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
    ]
  return (
    <div>
        <div className="w-[220px] gap-2 pt-10 fixed top-0 bottom-0 flex flex-col px-5 bg-[#edc5ff]">
            <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Dashboard</button>
            <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Reimbursement</button>
            <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Karyawan</button>
        </div>
        <div className='flex flex-col gap-2 ml-60 px-5 pt-3 pb-10'>
            <h1 className='pt-5 font-bold text-2xl'>Dashboard Page</h1>
            <div className='flex flex-row gap-5'>
                <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] p-3 rounded-lg'>
                    <p className='text-[12px] font-light bg-[#edc5ff]'>Total Pengajuan</p>
                    <p className='text-[22px] font-semibold bg-[#edc5ff]'>34</p>
                </div>
                <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] p-3 rounded-lg'>
                    <p className='text-[12px] font-light bg-[#edc5ff]'>Total Diterima</p>
                    <p className='text-[22px] font-semibold bg-[#edc5ff]'>32</p>
                </div>
                <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] p-3 rounded-lg'>
                    <p className='text-[12px] font-light bg-[#edc5ff]'>Total Ditolak</p>
                    <p className='text-[22px] font-semibold bg-[#edc5ff]'>1</p>
                </div>
                <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] p-3 rounded-lg'>
                    <p className='text-[12px] font-light bg-[#edc5ff]'>Total Pending</p>
                    <p className='text-[22px] font-semibold bg-[#edc5ff]'>2</p>
                </div>
                <div className='flex flex-col w-[180px] mt-5 text-[12px] font-light bg-[#edc5ff] p-3 rounded-lg'>
                    <p className='text-[12px] font-light bg-[#edc5ff]'>Total Karyawan</p>
                    <p className='text-[22px] font-semibold bg-[#edc5ff]'>14</p>
                </div>
            </div>
            <div className='flex flex-col w-[780px] mt-5 text-[12px] font-light bg-[#edc5ff] p-3 rounded-lg'>
                <p className='text-[12px] font-light bg-[#edc5ff]'>Total Reimbursement</p>
                <div className='flex flex-row items-center justify-between'>
                    <p className='text-[22px] font-semibold bg-[#edc5ff]'>Rp. 5.000.000</p>
                    <p className='text-[12px] font-light bg-[#edc5ff]'>Oktober 2025</p>
                </div>
            </div>
            <div className='flex flex-row w-[780px] justify-between'>
                <h1 className='pt-5 text-[15px] font-medium'>New Reimburse this month</h1>
                <h1 className='pt-5 text-[15px] font-medium'>more</h1>
            </div>
            <div className='flex flex-col gap-2 w-[780px] text-[12px] bg-[#edc5ff] p-5 rounded-lg'>
                {data.map((item, index)=>{
                    return (
                        <div key={index} className='bg-[#ffffff] flex flex-row p-3 rounded-sm'>
                            <div className='flex flex-row justify-between w-full'>
                                <div className='flex flex-col'>
                                    <p className='text-[12px] font-light'>{item.title}</p>
                                    <p className='text-[12px] font-light'>{item.description}</p>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <p className='text-[12px] font-semibold'>+ Rp. {item.amount}</p>
                                    <p className='text-[12px] font-light'>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default page