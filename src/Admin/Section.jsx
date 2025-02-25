import React from 'react'
import DocumentEditor from './DocumentEditor'
import DeliveryInformation from './DeliveryInformation'
import Status from './Status'
import Package from './Package'
import Images from './Images'


const Section = ({selectedCode}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <DocumentEditor selectedCode={selectedCode} />
    <DeliveryInformation selectedCode={selectedCode} />
    <Status selectedCode={selectedCode} />
    <Package selectedCode={selectedCode}/>
    <Images selectedCode={selectedCode} />
   

  </div>
  
  )
}

export default Section