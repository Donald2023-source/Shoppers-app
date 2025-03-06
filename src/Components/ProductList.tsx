import React from 'react'
import { ProductData } from '../../types'
import { getProductsData } from '@/lib/getData'

const ProductList = async() => {
    const Products:ProductData[] = await getProductsData()
    
  return (
    <div>
      
    </div>
  )
}

export default ProductList
