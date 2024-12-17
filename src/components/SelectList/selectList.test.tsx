import { render, screen } from "@testing-library/react-native"
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("Should be returned details of city selected.", () => {
    const data = [
      {
        id: '1',
        name: 'Caçapava',
        latitude: 123,
        longitude: 456
      },
      {
        id: '2',
        name: 'Porto Alegre',
        latitude: 789,
        longitude: 987
      }
    ]
    
    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={() => {}}
      />
    );

    const selectedCity = screen.getByText("Caçapava")
  })
})