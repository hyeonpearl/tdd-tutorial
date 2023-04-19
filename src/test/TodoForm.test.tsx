import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

describe('<TodoForm />', () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요'); // Input이 있는지 확인
    const button = screen.getByText('등록'); // button이 있는지 확인

    return {
      ...utils,
      input,
      button,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();

    expect(input).toBeTruthy(); // 해당 값이 truthy 한 값인지 확인
    expect(button).toBeTruthy();
  });

  it('changes input', () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });

    expect(input).toHaveAttribute('value', 'TDD 배우기');
  });

  it('calls onInsert and clears input', () => {
    /**
     * jest 에서 제공하는 mock 함수
     *
     * toBeCalled 또는 toBeCalledWith 같은 matcher를 사용해서 함수가 호출됐는지,
     * 호출 됐다면 어떤 파라미터로 호출 됐는지 이런 것들을 쉽게 확인
     */
    const onInsert = jest.fn();

    const { input, button } = setup({ onInsert }); // props가 필요할 땐 이렇게 직접 전달

    // Input 수정
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });

    fireEvent.click(button);
    // onInsert로 'TDD 배우기' 파라미터가 호출되어야 함
    expect(onInsert).toBeCalledWith('TDD 배우기');
    // Input 비워져야함
    expect(input).toHaveAttribute('value', '');
  });
});
