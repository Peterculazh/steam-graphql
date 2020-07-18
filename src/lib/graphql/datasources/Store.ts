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

    async getFeaturedListDetailed() {
        const list = await this.get('featured');
        const featuredList = [...list.large_capsules, ...list.featured_win];
        const uniqueFeaturedList: any = [...new Set(featuredList.map(item => item.id))];
        return this.getGameDetailedArrayByIds({ ids: uniqueFeaturedList });
    }

    async getGameById({ id }: { id: number }) {
        const game = await this.get('appdetails', { appids: id });
        console.log(game);
        return game[id].success ? game[id].data : {};
    }

    async getGameDetailedArrayByIds({ ids }: { ids: [number] }) {
        return Promise.all(
            ids.map(id => this.getGameById({ id }))
        );
    }
}

export default StoreApi;