import { getStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage";

import type { CityProps } from "@services/getCityByNameService";

describe("Storage: CityStorage", () => {
  it("should be able to return null when there's no city on storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be able to return city storeged.", async () => {
    const newCity: CityProps = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(newCity)
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  })
})