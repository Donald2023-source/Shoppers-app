import React from 'react'
import { ProductData } from '../../types'
import { getProductsData } from '@/lib/getData'
import products from '@/sanity/schemas/products'
import ProductCard from './ProductCard'

const ProductList = async() => {
    const Products:ProductData[] = await getProductsData()

  return (
    <div>
      {
        Products.map((item) => <ProductCard key={item?._id} />)
      }
    </div>
  )
}

export default ProductList
