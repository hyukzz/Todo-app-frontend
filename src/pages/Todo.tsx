import { useEffect, createContext } from 'react';

import { useAuth } from '../hooks/useAuth';
import useTodo from '../hooks/useTodo';
import TodoList from '../components/TodoList';
import { TodoItemType } from '../@types/types';

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
    <>
      <TodoContext.Provider value={todoValues}>
        <TodoList />
      </TodoContext.Provider>
    </>
  );
};

export default Todo;
