import React from 'react'
import Delivery from '../../Track/Delivery'
import Info from '../../Track/Info'
import Package from '../../Track/Package'
import Events from '../../Track/Events'
import GoogleMapComponent from '../../Track/GoogleMapComponent'


const Clientel = ({ selectedCode }) => {
  return (
    <div className='lg:mx-[12rem]'>
      <div className="py-[8rem] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0">
      <GoogleMapComponent selectedCode={selectedCode}/>
      <Delivery selectedCode={selectedCode} />
      <Info selectedCode={selectedCode} />
      <Package selectedCode={selectedCode}/>
      <Events selectedCode={selectedCode} />
      {/* Add another component here to make it three columns if needed */}
    </div>
    </div>
   
  )
}

export default Clientel
