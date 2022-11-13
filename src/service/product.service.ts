import {DocumentDefinition} from 'mongoose'
import { IProductDocument } from '../models/interfaces';
import ProductModel from '../models/product.models';

export const createProductService = async (input: DocumentDefinition<Omit<IProductDocument, 'createdAt' | 'updatedAt'>>) => {
    console.log(input);
    return ProductModel.create(input)
}

export const getAllProductsService = async () => {
    return ProductModel.find({});
}