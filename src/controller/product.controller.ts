import {Request, Response} from 'express';
import {CreateProductInput} from '../schema/product.schema';
import { createProductService, getAllProductsService } from '../service/product.service';

export const createProductHandler = async (
    req: Request<{}, {}, CreateProductInput['body']>,
    res: Response
) => {
    const userId = res.locals.user._id;
    console.log(userId);

    const input = req.body;

    const product = await createProductService({ ...input, user: userId });
    
    return res.status(201).send(product);
}

export const getAllProductsHandler = async (req: Request, res: Response) => {
    const products = await getAllProductsService();

    res.status(200).send(products);
}