import { render, screen } from '@testing-library/react-native';

import { Input } from '@components/Input';

describe("Component: Input", () => {
  it("should be rendered without activity indicator", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator")
    expect(activityIndicator).toBeNull()
  })

  it("should be rendered with activity indicator if isLoading prop is true.", () => {
    render(<Input isLoading/>)

    const activityIndicator = screen.getByTestId("activity-indicator")
    expect(activityIndicator).toBeTruthy()
  })
})