import { useState, useContext } from 'react';

import { createTodoApi } from '../api/todoApi';
import { TodoContext } from '../pages/Todo';

const TodoCreate = () => {
  const { getTodoResponse } = useContext(TodoContext);

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateTodo = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    await createTodoApi(inputValue);

    getTodoResponse();
    setInputValue('');
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} data-testid='new-todo-input' />
      <button onClick={handleCreateTodo} data-testid='new-todo-add-button'>
        추가
      </button>
    </>
  );
};

export default TodoCreate;
