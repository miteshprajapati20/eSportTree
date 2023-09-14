import React, { useEffect, useState } from 'react'
import Header from './Header'
import Main from './Main'
import data from '../data'

const Card = () => {
    const[info, setInfo]=useState(data);
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
        

  return (
    <div className=' flex flex-col items-start mx-2 my-2 gap-5 bg-transparent'>
        <div className='w-full flex flex-col items-center gap-6 border border-gray-300 rounded-lg'>
            <Header info={data} setInfo={setInfo} setShowAll = {setShowAll}/>
        </div>

        <div className='w-full flex items-center justify-start mr-3'>
            <Main info = {info} showAll={showAll}/>
        </div>
        <div className='w-full flex items-center justify-center sticky bottom-0 '>
          <button onClick={toggleShowAll} className='py-1 bg-green-600 w-full rounded-lg'> {showAll ? 'Show Less' : 'Show All'}</button>
        </div>
    </div>
  )
}

export default Card