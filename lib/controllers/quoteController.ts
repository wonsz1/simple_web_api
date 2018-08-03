import * as mongoose from 'mongoose';
import { QuoteSchema } from '../models/quoteModel';
import { Request, Response } from 'express';

const Quote = mongoose.model('Quote', QuoteSchema);

export class QuoteController {

    public getQuotes(req: Request, res: Response) {
        Quote.find({}, (err, quotes) => {
            if(err) {
                res.send(err);
            }
            res.json(quotes);
        });
    }

    public addNewQuote(req: Request, res: Response) {
        let newQuote = new Quote(req.body);

        newQuote.save((err, quote) => {
            if(err) {
                res.send(err);
            }
            res.json(quote);
        });
    }

    public getQuote(req: Request, res: Response) {
        Quote.findById(req.params.quoteId, (err, quote) => {
            if(err) {
                res.send(err);
            }
            res.json(quote);
        });
    }
}