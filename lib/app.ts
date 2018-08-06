import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as mongoose from "mongoose";

class App {
    public app: express.Application;
    public router: Routes = new Routes();
    public mongoUrl: string = 'mongodb://aadmin:zxc123@ds217560.mlab.com:17560/example_db';

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));

        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise; //use promise instead of callbacks
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;