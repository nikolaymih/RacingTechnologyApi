import {Schema, model} from 'mongoose';
import { IProductDocument } from './interfaces';

const productSchema = new Schema<IProductDocument>({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    name: {
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
    }
})

export default model<IProductDocument>('Product', productSchema);