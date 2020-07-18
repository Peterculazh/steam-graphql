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

    type FeaturedDetailed {
        name: String
        # pc_requirements: {
        #     minimum: String
        #     recommended: String
        # }
        # required_age: Int
    }

    type Query{
        featured_list: [Featured]
        featured_detailed_list: [FeaturedDetailed]
    }
`

export default typeDefs;