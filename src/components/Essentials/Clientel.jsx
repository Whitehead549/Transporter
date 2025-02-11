import React from 'react'
import Delivery from '../../Track/Delivery'
import Info from '../../Track/Info'
import Package from '../../Track/Package'


const Clientel = ({ selectedCode }) => {
  return (
    <div className='mx-[12rem]'>
      <div className="pt-[6rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0">
      <Delivery selectedCode={selectedCode} />
      <Info selectedCode={selectedCode} />
      <Package selectedCode={selectedCode}/>
      {/* Add another component here to make it three columns if needed */}
    </div>
    </div>
   
  )
}

export default Clientel
