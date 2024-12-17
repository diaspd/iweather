import { render, screen, fireEvent } from "@testing-library/react-native"
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be returned details of city selected.", () => {
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

  it("should not be shown the options when data props is empty", () => {
    render(
      <SelectList 
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    )

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  })
})