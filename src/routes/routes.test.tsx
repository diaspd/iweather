import { screen, waitFor } from "@testing-library/react-native"

import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { render } from "@__tests__/utils/customRender"
import { Routes } from "@routes/index"

describe("Routes", () => {
  it('should be able to render Search screen when not city selected.', async () => {
    render(
      <Routes />
    )

    const title = await waitFor(() => screen.findByText(/^escolha um local/i))
  
    expect(title).toBeTruthy()
  });

  it('shoul be able to render Dashboard screen when has city selected.', async () => {
    const city = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    }
    
    await saveStorageCity(city)
    const { debug } = render(<Routes />)
    debug()
  })
})