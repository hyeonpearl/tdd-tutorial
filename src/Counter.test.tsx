import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
  it('matches snapshot', () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it('has a number and two buttons', () => {
    render(<Counter />);
    screen.getByText('0');
    screen.getByText('+1');
    screen.getByText('-1');
  });

  it('increase', () => {
    render(<Counter />);
    const number = screen.getByText('0');
    const button = screen.getByText('+1');

    // fireEvent는 이벤트를 발생 시키는 함수
    fireEvent.click(button);
    fireEvent.click(button);

    expect(number).toHaveTextContent('2');
    expect(number.textContent).toBe('2');
  });

  it('decrease', () => {
    render(<Counter />);
    const number = screen.getByText('0');
    const button = screen.getByText('-1');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(number).toHaveTextContent('-2');
    expect(number.textContent).toBe('-2');
  });
});
