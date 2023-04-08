import { useState, useContext } from 'react';

import { TodoContext } from '../pages/Todo';
import { deleteTodoApi, updateTodoApi } from '../api/todoApi';
import { TodoItemType } from '../@types/types';

const TodoItem = ({ todo }: { todo: TodoItemType }) => {
  const { getTodoResponse } = useContext(TodoContext);

  const [todoData, setTodoData] = useState(todo);
  const [isModify, setIsModify] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleCompleted = () => {
    setIsCompleted(previous => !previous);

    updateTodoApi(todo.id, todo.todo, !isCompleted);
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!window.confirm('정말 수정하시겠습니까?')) return;

    const {
      todoInput: { value },
    } = e.currentTarget;

    const newTodoItem = await updateTodoApi(todo.id, value, isCompleted);

    setTodoData(newTodoItem);
    getTodoResponse();
    setIsModify(false);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    await deleteTodoApi(id);
    getTodoResponse();
  };

  return (
    <>
      {isModify ? (
        <form onSubmit={handleUpdate}>
          <input type='checkbox' checked={isCompleted} onChange={handleCompleted} />
          <input name='todoInput' defaultValue={todoData.todo} data-testid='modify-input' />
          <button data-testid='submit-button'>제출</button>
          <button onClick={() => setIsModify(false)} data-testid='cancel-button'>
            취소
          </button>
        </form>
      ) : (
        <>
          <input type='checkbox' checked={isCompleted} onChange={handleCompleted} />
          <span>{todoData.todo}</span>
          <div>
            <button onClick={() => setIsModify(previous => !previous)} data-testid='modify-button'>
              수정
            </button>
            <button onClick={() => handleDelete(todoData.id)} data-testid='delete-button'>
              삭제
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default TodoItem;
