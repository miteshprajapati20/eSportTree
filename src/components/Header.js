import React, { useState } from 'react'

const Header = ({info, setInfo}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilter = (tag)=>{
    setActiveFilter(tag);
    setInfo(info.filter((item)=>item.tag.includes(tag)))
  }

  return (
    <div className='w-full '>
        <div className='flex items-center gap-4 px-6 py-2 flex-wrap'>
            <p onClick={()=>handleFilter("All")} className={`bg-white text-black px-3 py-1 rounded-2xl hover:cursor-pointer transition-all duration-200 ${activeFilter === 'All' ? 'bg-green-700 text-white' : 'hover:bg-gray-300'}`}>All</p>

            <p onClick={()=>handleFilter('espottree')} className={`bg-white text-black px-3 py-1 rounded-2xl hover:cursor-pointer transition-all duration-200 ${activeFilter === 'espottree' ? 'bg-green-700 text-white' : 'hover:bg-gray-300'}`}>eSpotTree</p>

            <p onClick={()=>handleFilter('marketplace')}  className={`bg-white text-black px-3 py-1 rounded-2xl hover:cursor-pointer transition-all duration-200 ${activeFilter === 'marketplace' ? 'bg-green-700 text-white' : 'hover:bg-gray-300'}`}>marketPlace</p>

            <p onClick={()=>handleFilter('news')}  className={`bg-white text-black px-3 py-1 rounded-2xl hover:cursor-pointer transition-all duration-200 ${activeFilter === 'news' ? 'bg-green-700 text-white' : 'hover:bg-gray-300'}`}>news</p>
        </div>
    </div>
  )
}

export default Header