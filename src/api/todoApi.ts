import { AxiosError } from 'axios';
import { api } from './api';
import { notification } from '../utils/toast';

export const getTodoApi = async () => {
  try {
    const { data } = await api.get('/todos');

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      notification('error', error.response?.data.message);
      return;
    }
  }
};

export const createTodoApi = async (todo: string) => {
  try {
    const response = await api.post('/todos', { todo });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      notification('error', error.response?.data.message);
    }
  }
};

export const deleteTodoApi = async (id: number) => {
  try {
    const response = api.delete(`/todos/${id}`);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      notification('error', error.response?.data.message);
    }
  }
};

export const updateTodoApi = async (id: number, todo: string, isCompleted: boolean) => {
  try {
    const response = await api.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    /* 
      response.data === (todo item)
      => id: number isCompleted: boolean todo: string userId: number 
    */
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      notification('error', error.response?.data.message);
    }
  }
};
