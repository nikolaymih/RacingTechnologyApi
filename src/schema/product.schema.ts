import {object, string, number, TypeOf} from 'zod'

const payload = {
    body: object({
        name: string({
            required_error: 'Name is required'
        }).min(3, 'Name should be at least 3 characters'),
        image: string({
            required_error: 'Image is required'
        }),
        price: number({
            required_error: 'Price is required'
        }).min(1, 'Price can not be less than 1')
    })
}

export const createProductSchema = object({
    ...payload
})

export type CreateProductInput = TypeOf<typeof  createProductSchema>