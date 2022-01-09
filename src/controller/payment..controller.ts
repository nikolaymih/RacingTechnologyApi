import {Request, Response} from "express";
import config from "config";
import Stripe from 'stripe';

const paymentSecretKey = config.get<string>('paymentSecretKey');

const stripe = new Stripe(paymentSecretKey, {
    apiVersion: '2020-08-27',
    typescript: true
});

export const paymentIntends = async (req: Request, res: Response) => {
    const {paymentAmount} = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: paymentAmount * 1000,
            currency: 'usd'
        })

        res.json(paymentIntent.client_secret).status(200);

    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(500).json({statusCode: 500, err: e.message});
        }
    }
}