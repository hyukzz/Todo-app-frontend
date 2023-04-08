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
    <div className='flex flex-row justify-center items-center space-x-4 z-10'>
      <input
        className='flex-grow border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
        value={inputValue}
        onChange={handleInputChange}
        data-testid='new-todo-input'
      />
      <button
        className='w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'
        onClick={handleCreateTodo}
        data-testid='new-todo-add-button'
      >
        추가
      </button>
    </div>
  );
};

export default TodoCreate;
