import { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodoContext } from '../pages/Todo';
import { TodoItemType } from '../@types/types';

const TodoList = () => {
  const { isLoading, todoData } = useContext(TodoContext);

  return (
    <div className='relative h-[500px] overflow-hidden mt-2'>
      <div className='absolute top-0 left-0 w-full h-full overflow-auto'>
        <ul className='list-disc pl-5 pr-10'>
          {isLoading ? (
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='rounded-full h-16 w-16 border-b-2 border-gray-300 animate-spin'></div>
            </div>
          ) : (
            todoData?.map((todoData: TodoItemType) => <TodoItem key={todoData.id} todo={todoData} />)
          )}
        </ul>
        {!isLoading && todoData && todoData.length === 0 && (
          <div className='flex justify-center items-center h-full'>
            <span className='text-gray-500 select-none'>TODO LIST가 비어있습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
