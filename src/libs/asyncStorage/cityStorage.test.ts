import { getStorageCity } from "@libs/asyncStorage/cityStorage";

describe("Storage: CityStorage", () => {
  it("should be able to return null when there's no city on storage", async () => {
    const response = await getStorageCity();
    console.log(response)
  })
})