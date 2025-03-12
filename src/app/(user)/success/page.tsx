interface Props {
    searchParams: {
        session_id: string | null
    }
}

import React from 'react'

const SuccessPage = ({ searchParams} : Props) => {
    console.log(searchParams)
  return (
    <div>
      Sucess page
    </div>
  )
}

export default SuccessPage
