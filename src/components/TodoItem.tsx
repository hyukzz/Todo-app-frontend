import { useState, useContext } from 'react';

import { TodoContext } from '../pages/Todo';
import { deleteTodoApi, updateTodoApi } from '../api/todoApi';
import { TodoItemType } from '../@types/types';
import useConfirmation from './Confirm';

const TodoItem = ({ todo }: { todo: TodoItemType }) => {
  const { getTodoResponse } = useContext(TodoContext);

  const [Confirmation, confirm] = useConfirmation();
  const [todoData, setTodoData] = useState(todo);
  const [isModify, setIsModify] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleCompleted = () => {
    setIsCompleted(previous => !previous);

    updateTodoApi(todo.id, todo.todo, !isCompleted);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      todoInput: { value },
    } = e.currentTarget;

    const newTodoItem = await updateTodoApi(todo.id, value, isCompleted);

    setTodoData(newTodoItem);
    getTodoResponse();
    setIsModify(false);
  };

  const handleDelete = async (id: number) => {
    confirm('삭제하시겠습니까?').then(async confirmed => {
      if (confirmed) {
        await deleteTodoApi(id);
        getTodoResponse();
      }
    });
  };

  return (
    <div className='flex items-center py-2 border-b border-gray-300 m-2'>
      {isModify ? (
        <form className='flex-1 flex items-center' onSubmit={handleUpdate}>
          <input className='mr-2' type='checkbox' checked={isCompleted} onChange={handleCompleted} />
          <input
            className='px-2 py-1 mr-1 rounded border-gray-300 border w-2/5'
            name='todoInput'
            defaultValue={todoData.todo}
            data-testid='modify-input'
          />
          <div className='flex items-center ml-auto'>
            <button
              className='px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 mr-2'
              data-testid='submit-button'
            >
              제출
            </button>
            <button
              className='px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-100'
              onClick={() => setIsModify(false)}
              data-testid='cancel-button'
            >
              취소
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className='flex-1'>
            <div className='ml-auto d-flex flex-column'>
              <input className='mr-2' type='checkbox' checked={isCompleted} onChange={handleCompleted} />
              <span className={isCompleted ? 'line-through' : ''}>{todoData.todo}</span>
            </div>
          </div>
          <div>
            <button
              className='px-2 py-1 bg-gray-200 text-gray-600 rounded-md mr-2'
              onClick={() => setIsModify(previous => !previous)}
              data-testid='modify-button'
            >
              수정
            </button>
            <button
              className='px-2 py-1 bg-red-500 text-white rounded-md'
              onClick={() => handleDelete(todoData.id)}
              data-testid='delete-button'
            >
              삭제
            </button>
            {Confirmation}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
