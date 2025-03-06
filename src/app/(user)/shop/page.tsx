import React from 'react'
import Container from '@/Components/Container'
import ProductList from '@/Components/ProductList'
const page = () => {
  return (
    <Container>
      <h2 className='text-2xl font-semibold mb-5'>All Availavle</h2>
      <ProductList />
    </Container>
  )
}

export default page
