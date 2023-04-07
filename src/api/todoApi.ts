import { api } from './api';

export const getTodoApi = async () => {
  const { data } = await api.get('/todos');

  return data;
};

export const createTodoApi = async (todo: string) => {
  const response = await api.post('/todos', { todo });

  return response;
};

export const deleteTodoApi = async (id: number) => {
  const response = api.delete(`/todos/${id}`);

  return response;
};

export const updateTodoApi = async (id: number, todo: string, isCompleted: boolean) => {
  const response = await api.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  /* 
    response.data === (todo item)
    => id: number isCompleted: boolean todo: string userId: number 
  */

  return response.data;
};
