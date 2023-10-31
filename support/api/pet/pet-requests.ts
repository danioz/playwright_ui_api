import { APIResponse } from '@playwright/test';
import { PetClient } from './pet-client';
import { AddPet } from './pet-model';

export class PetRequests {
  async addPet(body: AddPet) {
    const context = await new PetClient().getClient();
    return await context.post(`pet/`, { data: body }).then(async (response) => {
      return response;
    });
    //.finally(async () => await context.dispose());
  }

  async getPetByID(petID: string) {
    const context = await new PetClient().getClient();
    return await context.get(`pet/${petID}`).then(async (response) => {
      return response;
    });
    //.finally(async () => await context.dispose());
  }

  async getPetName(response: APIResponse) {
    return await JSON.parse((await response.body()).toString()).name;
  }

  async createPetBody(petID: number, petName: string): Promise<AddPet> {
    return {
      id: petID,
      category: {
        id: petID,
        name: 'categoryName',
      },
      name: petName,
      photoUrls: ['string'],
      tags: [
        {
          id: petID,
          name: 'string',
        },
      ],
      status: 'available',
    };
  }
}
