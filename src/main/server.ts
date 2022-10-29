import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

import * as dotenv from 'dotenv'

dotenv.config()

void MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    console.log('Banco: ', env.mongoUrl)
    console.log('process.env.MONGO_URL: ', process.env.MONGO_URL)
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
