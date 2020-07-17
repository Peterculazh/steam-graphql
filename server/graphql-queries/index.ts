import gql from 'graphql-tag';

export const GET_FEATURED_LIST = gql`
  query {
  featured_list {
    name
    id
    original_price
    discounted
    discounted_percent
    original_price
    final_price
    large_image
    small_image
  }
}
`