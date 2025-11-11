import React from 'react'

const Navbar = () => {
  return (
    <div className="w-[220px] gap-2 pt-10 fixed top-0 bottom-0 flex flex-col px-5 bg-[#edc5ff]">
        <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Dashboard</button>
        <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Reimbursement</button>
        <button className="flex gap-3 bg-[#9556a9] text-[12px] text-white px-10 py-2 rounded-md  shadow-md hover:bg-[#532561] transition">Karyawan</button>
    </div>
  )
}

export default Navbar