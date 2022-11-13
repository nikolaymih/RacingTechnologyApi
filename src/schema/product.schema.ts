import {object, string, number, TypeOf} from 'zod'

const payload = {
    body: object({
        title: string({
            required_error: 'Name is required'
        }).min(3, 'Name should be at least 3 characters'),
        image: string({
            required_error: 'Image is required'
        }),
        category: string({
            required_error: 'Category is required'
        }).min(3, 'Name should be at least 3 characters'),
        price: number({
            required_error: 'Price is required'
        }).min(1, 'Price can not be less than 1'),
        model: string({
            required_error: ('Model is required')
        }).min(3, 'Model should be at least 3 characters'),
        description: string()
    })
}

export const createProductSchema = object({
    ...payload
})

export type CreateProductInput = TypeOf<typeof  createProductSchema>