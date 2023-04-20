import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import DelayedToggle from '../components/DelayedToggle';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    await waitFor(() => screen.findByText('야호!!'), { timeout: 3000 }); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다립니다.
  });

  it('toggles text ON/OFF', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    const text = await waitFor(() => screen.findByText('ON'), {
      timeout: 3000,
    });
    expect(text).toHaveTextContent('ON');
  });

  it('changes something when button is clicked', async () => {
    const { container } = render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    const mutations = await waitFor(() => ({ container }), { timeout: 3000 });
    console.log(mutations);
  });

  it('removes text when toggle is OFF', async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText('토글');

    fireEvent.click(toggleButton);
    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() => screen.getByText('야호!!'), { timeout: 3000 }); // ON이 됨

    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => screen.queryByText('야호!!'), {
      timeout: 3000,
    });
  });
});
