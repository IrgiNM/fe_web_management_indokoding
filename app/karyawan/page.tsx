import Image from 'next/image'
import React from 'react'

export default function dataKaryawan() {

const dataList =[
  {
    id: 1,
    username: 'Tantri',
    email: 'tantricantik@gmail.com',
    image:''
  },
  {
    id: 2,
    username: 'Zahra',
    email: 'zahraivy@gmail.com',
    image:''
  },
  {
    id: 3,
    username: 'Irgi',
    email: 'irgiaza@gmail.com',
    image:''
  },
  {
    id: 4,
    username: 'Dinar',
    email: 'dinar123@gmail.com',
    image:''
  },
  {
    id: 5,
    username: 'mba iza',
    email: 'sitiiza123@gmail.com',
    image:''
  },
];

const reqReimburse =[
  {
    id: 1,
    image: '',
    title: 'Uang Hotel November',
    subtitle: 'image: nota.jpg',
    price: '+ Rp. 5000.000',
    date: '06/11/2025'
  },

  {
    id: 2,
    image: '',
    title: 'Uang Makan',
    subtitle: 'image: nota.jpg',
    price: '+ Rp. 1500.000',
    date: '08/11/2025'
  },

  {
    id: 3,
    image: '',
    title: 'Uang Bensin',
    subtitle: 'image: nota.jpg',
    price: '+ Rp. 500.000',
    date: '10/11/2025'
  },

  {
    id: 4,
    image: '',
    title: 'Service Laptop',
    subtitle: 'image: nota.jpg',
    price: '+ Rp. 150.000',
    date: '11/11/2025'
  }
]

  return (
    <div className='px-15 pb-20'>
      <div className='flex flex-row w-full  justify-between mt-10 '>
        <div className='flex flex-row items-center gap-15'>
          <button className='bg-purple-200 px-3 py-3 rounded-lg'>
          <Image src={require("../../public/assets/image/back.png")} style={{ width: 10, height: 13 }} tintColor={"#9333EA"}/>
          </button>
          <header className='font-bold text-[20px]'>Data Karyawan</header>
        </div>
          <button className='bg-purple-300 flex flex-row px-[12px] py-[7px] items-center rounded-lg  gap-1'>
            <Image src={require("../../public/assets/image/add.png")} style={{ width: 10, height: 10 }} tintColor={"#9333EA"}/>
            <p className=' font-semibold text-[13px] '>New Member</p>
          </button>
      </div>

    
    <div className='w-full flex flex-row justify-between mt-10'>
      <div className='  w-120 flex flex-col  gap-5'> 
        {dataList.map((item, index)=>{
          return(
            <button key={index} className='flex flex-row shadow-md shadow-purple-700 bg-purple-300 px-3 py-2 w-full rounded-lg gap-2'>
            <Image src={require("../../public/assets/image/profile.png")} style={{ width: 40, height: 40 }} tintColor={"#9333EA"}/>
            <div className='w-full flex flex-col items-start '>
              <p className='font-bold '>{item.username}</p>
              <p className='text-[12px]'>{item.email}</p>
            </div>
            </button>
          )
          })}
      </div>

      <div className='w-150 bg-purple-300 rounded-lg px-5 py-5    '>
        <div className='w-full   flex flex-row items-center gap-5'>
            <Image src={require("../../public/assets/image/profile.png")} style={{ width: 80, height: 80 }} tintColor={"#9333EA"}/>
            <div>
              <p className='font-bold'>Username</p>
              <p className=''>tantricantik@gmail.com</p>
            </div>
            <div className='ml-30'>
              <p className='italic'>Total:</p>
              <p className='font-bold'>Rp. 5000.000</p>
            </div>
        </div>

        <div className='mt-3 '>
          <button className='flex flex-row items-center bg-purple-400 rounded-xl px-2 py-1 gap-2'>
            <p className='text-[8px] font-bold'>Reimburse</p>
            <Image src={require("../../public/assets/image/back.png")} className='-rotate-90 ' style={{ width: 7, height: 10 }} tintColor={"#9333EA"}/>
          </button>
        </div>
        

        <div className='w-full overflow-auto h-65 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden   flex flex-col gap-2 mt-3'>
          {reqReimburse.map((item, index)=>{
            return(

            
          <div className='w-full bg-white rounded-md px-3 py-3 '>
            <div className='flex flex-row   gap-3'>
              <div className='w-8 h-8 rounded-lg bg-purple-400 flex items-center justify-center'>
                <Image src={require("../../public/assets/image/time.png")}  style={{ width: 20, height: 20 }} tintColor={"#9333EA"}/>
              </div>
              <div className='w-full flex flex-row justify-between'>
                <div className='flex flex-col'>
                  <p className='text-[10px] font-bold'>{item.title}</p>
                  <p className='text-[10px] '>{item.subtitle}</p>
                </div>
                <div className=''>
                  <p className='font-bold text-[12px]'>{item.price}</p>
                  <p className='text-[8px] text-right'>{item.date}</p>
                </div>
              </div>
            </div>

            <div className='flex flex-row justify-between mt-2'>
              <button className='flex flex-row items-center justify-center w-50 bg-purple-400  rounded-md  py-1 gap-2'>
                <Image src={require("../../public/assets/image/acc.png")}  style={{ width: 15, height: 15 }} tintColor={"#9333EA"}/>
                <p className='font-bold text-[10px]'>Accepted</p>
              </button>
              <button className='flex flex-row items-center justify-center w-50 bg-purple-400  rounded-md  py-1 gap-2'>
                <Image src={require("../../public/assets/image/rejected.png")}  style={{ width: 15, height: 15 }} tintColor={"#9333EA"}/>
                <p className='font-bold text-[10px]'>Rejected</p>
              </button>
            </div>  
          </div>
          )
          })}
        </div>

        <div className='flex flex-row justify-between px-5 mt-5 '>
            <button className='flex flex-row items-center bg-purple-400 rounded-lg px-2 py-2 gap-2 '>
              <Image src={require("../../public/assets/image/edit.png")}  style={{ width: 15, height: 15 }} tintColor={"#9333EA"}/>
              <p className='text-[10px]'>Edit Karyawan</p>
            </button>
            <button className='flex flex-row items-center bg-purple-400 rounded-lg px-2 py-2 gap-2 '>
              <Image src={require("../../public/assets/image/delete.png")}  style={{ width: 13, height: 15 }} tintColor={"#9333EA"}/>
              <p className='text-[10px]'>Delete Karyawan</p>
            </button>
        </div>
      </div>
    </div>

    </div>
    
  )
}
