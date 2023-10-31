import { expect, test } from '@playwright/test';
import Tag from '../../support/tag';
import { PetRequests } from '../../support/api/pet/pet-requests';
import HttpStatusCode from '../../support/http-status-code';

test.describe('Pet endpoints', () => {
  let petResponse: PetRequests;
  const petName = 'Reksio';
  const petID = 25;

  test.beforeEach(async () => {
    petResponse = new PetRequests();
  });

  test(`Add new pet.${Tag.TAG_SECTION}${Tag.SMOKE_TEST}`, async () => {
    const response = await petResponse.addPet(await petResponse.createPetBody(petID, petName));
    expect(response.status()).toBe(HttpStatusCode.OK);
    expect(await petResponse.getPetName(response)).toEqual(petName);
  });

  test(`Find pet by ID.${Tag.TAG_SECTION}${Tag.SMOKE_TEST}`, async () => {
    const response = await petResponse.getPetByID(petID.toString());
    expect(response.status()).toBe(HttpStatusCode.OK);
    expect(await petResponse.getPetName(response)).toEqual(petName);
  });
});
