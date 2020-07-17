import { route, GET } from 'awilix-express';
import { Request, Response } from 'express';
import { app } from '../index';
import StoreApi from '../../src/lib/graphql/datasources/Store';


export default class RenderController {
    public nextApp: typeof app;
    public storeApi: StoreApi;

    constructor({ nextApp }: { nextApp: typeof app }) {
        this.nextApp = nextApp;
        this.storeApi = new StoreApi();
        //@ts-ignore
        this.storeApi.initialize({});
    }


    @GET()
    @route('/')
    async HomePage(req: Request, res: Response) {
        return this.storeApi.getFeaturedList()
            .then(featuredList => {
                const success: any = true;
                return this.nextApp.render(req, res, '/', { success, featuredList });
            })
            .catch(error => {
                const success: any = false;
                return this.nextApp.render(req, res, '/', { success, error });
            });
    }
}