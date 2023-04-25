
import * as dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from 'mongodb'
const { MONGO_URL } = process.env

const client = new MongoClient(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default client
