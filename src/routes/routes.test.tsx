import { render } from "@testing-library/react-native"

import { Routes } from "@routes/index"

describe("Routes", () => {
  it('should be render Search screen when not city selecte', () => {
    const { debug } = render(
      <Routes />
    )
    debug()
  })
})