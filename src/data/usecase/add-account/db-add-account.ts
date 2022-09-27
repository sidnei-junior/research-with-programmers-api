import { AddAccount, Encrypter, AddAccountModel, AccountModel } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter
  constructor(encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    // eslint-disable-next-line @typescript-eslint/return-await
    return new Promise((resolve) => resolve(null))
  }
}
