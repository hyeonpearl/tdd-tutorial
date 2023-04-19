import React, { useCallback, useState } from 'react';

interface Props {
  onInsert?: (text: string) => void;
}

const TodoForm = ({ onInsert }: Props) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert && onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>
  );
};

export default TodoForm;
