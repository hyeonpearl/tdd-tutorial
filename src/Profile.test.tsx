import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username='hyeonpearl' name='최현철' />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    render(<Profile username='hyeonpearl' name='최현철' />);
    screen.getByText('hyeonpearl');
    screen.getByText('(최현철)');
    screen.getByText(/최/);
  });
});
