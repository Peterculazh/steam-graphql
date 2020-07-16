import { RESTDataSource } from 'apollo-datasource-rest';

class StoreApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `http://store.steampowered.com/api/`;
    }

    async getFeaturedList() {
        const list = await this.get('featured');
        const featuredList = [...list.large_capsules, ...list.featured_win];
        const uniqueFeaturedList = Array.from(new Set(featuredList.map(item => item.id)))
            .map(id => {
                return featuredList.find(item => item.id === id)
            });
        return uniqueFeaturedList;
    }
}

export default StoreApi;