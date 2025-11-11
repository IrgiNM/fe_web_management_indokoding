import Navbar from '@/components/navbar'
import React from 'react'

export default function page() {
    const dataUsn = [
        {
            id: 1,
            username: "uwiw",
            email: "uwiw@example.com",
            image: "/profile.png"
        },
        {
            id: 2,
            username: "asep",
            email: "asep@example.com",
            image: "/profile.png"
        },
        {
            id: 3,
            username: "yanto",
            email: "yanto@example.com",
            image: "/profile.png"
        },
        {
            id: 4,
            username: "budi",
            email: "budi@example.com",
            image: "/profile.png"
        },
        {
            id: 5,
            username: "susi",
            email: "susi@example.com",
            image: "/profile.png"
        }
    ]
    const dataHistory = [
        {
            id: 1, 
            image: "/history.png",
            title: "Uang hotel",
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 2, 
            image: "/history.png",
            title: "Uang hotel", 
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        },
        {
            id: 3, 
            image: "/history.png",
            title: "Uang hotel",
            description: "description : asnkjc",
            amount: "5.000.000",
            date: "02/10/2025"
        },
        {
            id: 4,
            image: "/history.png",
            title: "Uang hotel",
            description: "description : asnkjc", 
            amount: "5.000.000", 
            date: "02/10/2025"
        }
    ]
    const imgHistory = [
        { id: 1, image: "/history.png" },
        { id: 2, image: "/history.png" },
        { id: 3, image: "/history.png" }
    ]
    const dataDesc =[
        {
            id: 1,
            title: "jejamuran",
            price: "800.000"
        },
        {
            id: 2,
            title: "hotel",
            price: "5.000.000"
        },
        {
            id: 3,
            title: "bensin",
            price: "100.000"
        },
        {
            id: 4,
            title: "tempo gelato",
            price: "500.000"
        },
        {
            id: 5,
            title: "kopi",
            price: "800.000"
        },
        {
            id: 6,
            title: "hotel",
            price: "5.000.000"
        }
    ]
  return (
    <div>
        <div className='flex flex-col gap-2 ml-5 mr-5 px-5 pt-3 pb-10'>
            <div className='flex flex-row items-end justify-between'>
                <div className='flex gap-5'>
                    <button className='bg-[#9d8fa4] text-[14px] font-bold text-white px-7 py-1 rounded-lg'>a</button>
                    <h1 className='pt-5 font-bold text-2xl'>Reimburse History Page</h1>
                </div>
                <div className='flex gap-5'>
                    <button className='bg-[#9d8fa4] text-[14px] font-bold text-white px-7 py-1 rounded-lg'>Reject</button>
                    <button className='bg-[#9d8fa4] text-[14px] font-bold text-white px-7 rounded-lg'>Accept</button>
                </div>
            </div>
            <div className='flex flex-row w-full overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mt-5 gap-5'>
                {dataUsn.map((item) => (
                <div key={item.id} className='flex flex-row justify-center items-center gap-5 px-8 py-3 bg-[#edc5ff] rounded-lg'>
                    <img src={item.image} alt={item.username} className='w-8 h-8 rounded-full bg-white'/>
                    <div className='flex flex-col'>
                        <span className='font-bold text-[12px]'>{item.username}</span>
                        <span className='text-[12px] text-gray-500'>{item.email}</span>
                    </div>
                </div>
                ))}
            </div>
            <div className='flex flex-row w-full mt-5'>
                <div className='flex w-[35%] flex-col justify-between gap-3'>
                    <h1 className='pt-10 text-[15px] font-semibold'>This Month</h1>
                    {dataHistory.map((item, index)=>{
                        return (
                            <div key={index} className='flex flex-row w-full bg-[#edc5ff] p-5 gap-3 rounded-sm shadow-md shadow-[#b393c2]'>
                                <img src={item.image} alt={item.title} className='w-8 h-8 rounded-full bg-white'/>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <p className='text-[12px] font-semibold'>{item.title}</p>
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
                <div className='flex w-[65%] flex-col justify-start items-end gap-5'>
                    <div className='flex flex-col h-full justify-start mt-15 w-[95%] rounded-lg'>
                        <div className='flex flex-row justify-center items-center py-2 rounded-t-lg w-full bg-purple-600 text-white'>
                            <h1 className='font-medium items-center'>Pending</h1>
                        </div>
                        <div className='w-full h-full bg-[#ffffff] border-[2px] border-b-0 border-purple-600 p-4 flex flex-row gap-3'>
                            <div className='flex flex-col gap-1 w-[50%]'>
                                <div className='flex flex-row gap-2'>
                                    {imgHistory.map((item)=>(
                                        <div key={item.id} className='flex justify-center items-center bg-white'>
                                            <img src={item.image} alt="history" className='w-20 h-15 rounded-lg bg-white'/>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-row font-medium text-[14px] gap-4 p-2'>
                                    <div className='flex flex-col w-[50%]'>
                                        <p>Date:</p>
                                        <p className='font-light border-[.5px] p-1 px-4 mt-2 rounded-sm'>29/10/2025</p>
                                    </div>
                                    <div className='flex flex-col w-[50%]'>
                                        <p>Total Price:</p>
                                        <p className='font-light border-[.5px] p-1 px-4 mt-2 rounded-sm'>Rp. 10.000.000</p>
                                    </div>
                                </div>
                                <div className='px-2 font-medium text-[14px]'>
                                    <p>Description:</p>
                                    <p className='font-light border-[.5px] p-2 px-4 mt-2 rounded-sm'>a</p>
                                </div>
                            </div>
                            <div className='flex flex-col w-[50%] p-2 border-[.5px] rounded-lg'>
                                <div>
                                    {dataDesc.map((item)=>(
                                        <div key={item.id} className='flex flex-row justify-between'>
                                            <span className='font-medium text-[14px]'>{item.title}</span>
                                            <span className='font-medium text-[14px]'>Rp. {item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full gap-5 p-4 pt-0 rounded-b-lg justify-center items-center bg-[#ffffff] border-[2px] border-t-0 border-purple-600'>
                            <button className='w-[50%] py-2 bg-red-500 text-white font-semibold rounded-lg'>Reject</button>
                            <button className='w-[50%] py-2 bg-green-500 text-white font-semibold rounded-lg'>Accept</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}
