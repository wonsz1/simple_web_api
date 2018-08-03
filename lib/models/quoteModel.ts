import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuoteSchema = new Schema({
    name: {
        type: String,
        required: "Enter author name"
    },
    quote: {
        type: String,
        required: "Enter quote"
    },
    created_date: {
        type: Date,
        default: Date.now,
    }
});