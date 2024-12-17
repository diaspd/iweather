import { render, screen, fireEvent } from "@testing-library/react-native"
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

    const onPress = jest.fn()
    
    render(
      <SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    );

    const selectedCity = screen.getByText(/porto/i) // || const selectedCity2 = screen.getByText('porto', {exact: false})
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[1])
  })
})