import { type SchemaTypeDefinition } from 'sanity'
import barner from '../schemas/barner'
import products from '../schemas/products'
import Category from '../schemas/Category'

export const schema: { types: SchemaTypeDefinition[] } = {
  //barner, Products, category
  types: [barner, products, Category],
}
