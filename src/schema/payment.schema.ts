import {object, number,} from "zod";

export const paymentSchema = object({
    body: object({
        paymentAmount: number({
            required_error: 'Amount should be provided'
        }).min(1)
    })
})