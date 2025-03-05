import  { groq }  from  'next-sanity' ;

const barnerQuery = groq`*[_type == "barner"] { ... }|order(createdAt asc)`;

const productsQuery = groq`*[_type == "product"] { ... }|order(createdAt asc)`; 

const bestSellersQuery = groq`*[_type == "product" && position == 'Bestsellers'] { ... }|order(createdAt asc)`;

export { barnerQuery, productsQuery, bestSellersQuery };