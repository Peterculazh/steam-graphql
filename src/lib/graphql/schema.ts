import gql from 'graphql-tag';

const typeDefs = gql`
    type Featured {
        id: ID
        name: String
        discounted: Boolean
        discounted_percent: Int
        original_price: Int
        final_price: Int
        large_capsule_image: String
        small_capsule_image: String
        header_image: String
    }

    type Query{
        featured_list:[Featured]
    }
`

export default typeDefs;