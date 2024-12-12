import { render } from '@testing-library/react-native';

import { Input } from '@components/Input';

describe("Component: Input", () => {
  it("should be rendered without activity indicator", () => {
    render(<Input />);
  })
})