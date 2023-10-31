import { APIRequestContext, request } from '@playwright/test';

export class PetClient {
  private clientInstance!: APIRequestContext;
  private petURL = 'https://petstore.swagger.io/v2/';

  async getClient() {
    this.clientInstance = this.clientInstance ? this.clientInstance : await this.initialize();
    return this.clientInstance;
  }

  private initialize = async () => {
    return await request.newContext({
      baseURL: `${this.petURL}`,
      //extraHTTPHeaders: { 'x-functions-key': 'special-key' },
    });
  };
}
