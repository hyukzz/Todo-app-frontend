import { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodoContext } from '../pages/Todo';
import { TodoItemType } from '../@types/types';

const TodoList = () => {
  const { isLoading, todoData } = useContext(TodoContext);

  return (
    <>
      <ul>
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          todoData?.map((todoData: TodoItemType) => <TodoItem key={todoData.id} todo={todoData} />)
        )}
      </ul>
    </>
  );
};

export default TodoList;
