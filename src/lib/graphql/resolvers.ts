import StoreApi from './datasources/Store';

const resolvers = {
    Query: {
        featured_list(_: any, __: any, { dataSources: { storeApi } }: { dataSources: { storeApi: StoreApi } }) {
            return storeApi.getFeaturedList();
        },
        featured_detailed_list(_: any, __: any, { dataSources: { storeApi } }: { dataSources: { storeApi: StoreApi } }) {
            return storeApi.getFeaturedListDetailed();
        }
    }
}

export default resolvers;