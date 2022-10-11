import dotenv from 'dotenv'
dotenv.config()

export const TEST = {
    key: process.env.TEST_KEY || '',
    token: process.env.TEST_TOKEN  || ''
}

export const PROD = {
    key: process.env.PROD_KEY  || '',
    token: process.env.PROD_TOKEN  || ''
}