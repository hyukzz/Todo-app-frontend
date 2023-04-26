import { useState, useCallback } from 'react';
import { getTodoApi } from '../api/todoApi';
import { TodoItemType } from '../@types/types';

type useTodoObjectType = {
  isLoading: boolean;
  todoData: TodoItemType[];
  getTodoResponse: () => Promise<void>;
};

const useTodo = (): useTodoObjectType => {
  const [isLoading, setIsLoading] = useState(true);
  const [todoData, setTodoData] = useState<TodoItemType[]>([]);

  const getTodoResponse = useCallback(async () => {
    const response = await getTodoApi();

    setTodoData(response);
    setIsLoading(false);
  }, []);

  return { isLoading, todoData, getTodoResponse };
};

export default useTodo;
