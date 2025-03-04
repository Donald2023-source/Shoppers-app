import { type SchemaTypeDefinition } from 'sanity'
import barner from '../schemas/barner'
import products from '../schemas/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  //barner, Products, category
  types: [barner, products],
}
