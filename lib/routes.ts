import {Request, Response} from "express";
import { QuoteController } from "./controllers/quoteController";

export class Routes {
    public quoteController: QuoteController = new QuoteController();
    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: "get request confirmed"
            });
        });

        app.route('/quotes').get(this.quoteController.getQuotes);
        app.route('/quotes').post(this.quoteController.addNewQuote);

        app.route('/quotes/:quoteId').get(this.quoteController.getQuote);
        app.route('/quotes/:quoteId').put((req: Request, res: Response) => {
            res.status(200).send({
                message: "get quotes request confirmed"
            });
        });
        app.route('/quotes/:quoteId').delete((req: Request, res: Response) => {
            ///
        });


    }
}