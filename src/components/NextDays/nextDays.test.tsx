import { render, screen } from '@testing-library/react-native';

import { NextDays } from "@components/NextDays";

import clearDay from '@assets/clear_day.svg'

describe("Component: NextDays", () => {
  it("should be abel to render day.", () => {
    render(
      <NextDays 
        data={[
          { day: '18/07', min: '30°c', max: '34°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '19/07', min: '28°c', max: '32°c', icon: clearDay, weather: 'Nublado' },
          { day: '20/07', min: '25°c', max: '30°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '21/07', min: '20°c', max: '28°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '22/07', min: '22°c', max: '30°c', icon: clearDay, weather: 'Chuva fraca' },
        ]}
      />
    );

    expect(screen.getByText('19/07')).toBeTruthy()
  })
})