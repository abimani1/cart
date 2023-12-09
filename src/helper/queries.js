import { gql } from '@apollo/client'


export const CHECK_PHONE_NUMBER = gql`
query MyQuery ($mobile:String){
  users(where: {mobile: {_eq: $mobile}}) {
    id
  }
}
`
export const getAllProduct = gql`
query MyQuery {
    product {
      color
      display_name
      price
    }
  }
`
export const getProductCategories = gql`
query MyQuery {
  product_categories {
    id
    image
    name
  }
}`

export const getProductByCategories = gql`
query MyQuery($id: uuid) {
  product(where: {category_id: {_eq: $id}}) {
    image
    name
    price
    id
    display_name
    discount
    description
    color
    category_id
    sale_price
    stocks
    type
    product_variants_id
    product_variants {
      discount
    }
  }
}`