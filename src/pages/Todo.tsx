import { useAuth } from '../hooks/useAuth';

const Todo = () => {
  useAuth();
  return <div>투두</div>;
};

export default Todo;
