import { useState, useCallback } from 'react';

import { getTodoApi } from '../api/todoApi';
import { TodoItemType } from '../@types/types';

type useTodoTupleType = [boolean, TodoItemType[], () => Promise<void>];

const useTodo = (): useTodoTupleType => {
  const [isLoading, setIsLoading] = useState(true);
  const [todoData, setTodoData] = useState<TodoItemType[]>([]);

  const getTodoResponse = useCallback(async () => {
    const response = await getTodoApi();

    setTodoData(response);
    setIsLoading(false);
  }, []);

  return [isLoading, todoData, getTodoResponse];
};

export default useTodo;
