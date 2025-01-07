import { getStorageCity, saveStorageCity, removeStorageCity } from "@libs/asyncStorage/cityStorage";

import type { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  latitude: 123,
  longitude: 456
}

describe("Storage: CityStorage", () => {
  it("should be able to return null when there's no city on storage", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull();
  });

  it("should be able to return city stored.", async () => {
    await saveStorageCity(newCity)
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be able to remove city from storage.", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  })

})