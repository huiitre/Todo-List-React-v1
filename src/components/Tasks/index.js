import { useSelector } from 'react-redux';
import Task from './task';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="tasks">
      {tasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Tasks;
