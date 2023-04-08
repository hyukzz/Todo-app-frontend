import { useEffect, createContext } from 'react';

import { useAuth } from '../hooks/useAuth';
import useTodo from '../hooks/useTodo';
import TodoList from '../components/TodoList';
import { TodoItemType } from '../@types/types';
import TodoCreate from '../components/TodoCreate';
import SignOut from '../components/SignOut';

interface TodoContextType {
  isLoading: boolean;
  todoData: TodoItemType[];
  getTodoResponse: () => Promise<void> | void;
}

export const TodoContext = createContext<TodoContextType>({
  isLoading: true,
  todoData: [],
  getTodoResponse: () => {},
});

const Todo = () => {
  useAuth();
  const [isLoading, todoData, getTodoResponse] = useTodo();

  const todoValues = { isLoading, todoData, getTodoResponse };

  useEffect(() => {
    getTodoResponse();
  }, [getTodoResponse]);

  return (
    <div className='h-screen bg-gray-200 flex justify-center items-center'>
      <div className='max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg w-full'>
        <TodoContext.Provider value={todoValues}>
          <div className='flex justify-between items-center mb-4'>
            <div className='font-bold text-xl text-blue-600 tracking-wide select-none'>TODO LIST</div>
            <SignOut />
          </div>
          <div className='border-b border-gray-300 mb-4'></div>
          <TodoCreate />
          <TodoList />
        </TodoContext.Provider>
      </div>
    </div>
  );
};

export default Todo;
