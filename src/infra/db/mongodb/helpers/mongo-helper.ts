import { Collection, MongoClient, MongoClientOptions } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  async connect(uri: string): Promise<void> {
    const mongoClientOptions: MongoClientOptions = {}
    this.client = await MongoClient.connect(process.env.MONGO_URL, mongoClientOptions)
  },
  async disconnect(): Promise<void> {
    await this.client.close()
  },
  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}
