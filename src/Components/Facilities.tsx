import React from 'react'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { GoRocket } from 'react-icons/go'

const Facilities = () => {
    const data = [
        {
            title: 'Free delivery',
            description: 'When ordering above N200,000',
            icon: <GoRocket />
        },
        {
            title: 'Secure Payment',
            description: "If goofs have problems",
            icon: <FaClockRotateLeft />
        },
        {
            title: '24/7 Support'
        }
    ]
  return (
    <div>
      
    </div>
  )
}

export default Facilities
