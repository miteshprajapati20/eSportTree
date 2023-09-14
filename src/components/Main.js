import React from 'react'

const Main = ({info,showAll}) => {

  return (
    <div className=''>
      {
      showAll
        ? info.map((item, index) => (
            <div key={index} className='mb-5 flex items-center justify-center gap-4 border-b'>
              <div className='flex items-center gap-5'>
                <img src={item.profile} width={40} className='rounded-full' alt='' />
              </div>
              <div className='mb-2 w-full xs:w-[340px]'>
                <h1 className='font-semibold text-green-500'>{item.name}</h1>
                <h2 className='text-gray-200 text-sm'>{item.description.slice(0, 100) + '...'}</h2>
              </div>
            </div>
          ))
        : info.slice(0, 4).map((item, index) => (
            <div key={index} className='mb-5 flex items-center justify-center gap-4 border-b'>
              <div className='flex items-center gap-5'>
                <img src={item.profile} width={40} className='rounded-full' alt='' />
              </div>
              <div className='mb-2 w-full xs:w-[340px]'>
                <h1 className='font-semibold text-green-500'>{item.name}</h1>
                <h2 className='text-gray-200 text-sm'>{item.description.slice(0, 100) + '...'}</h2>
              </div>
            </div>
          ))
          }
    </div>
  )
}

export default Main