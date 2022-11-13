import {Schema, model} from 'mongoose';
import { IProductDocument } from './interfaces';

const productSchema = new Schema<IProductDocument>({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
        type: String
    }
})

export default model<IProductDocument>('Product', productSchema);