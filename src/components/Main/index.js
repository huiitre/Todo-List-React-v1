import { useSelector } from 'react-redux';
import Tasks from '../Tasks';
import Form from '../Form';
import Spinner from '../Spinner';

const Main = () => {
  const loadSpinner = useSelector((state) => state.loadSpinner);
  return (
    <main>
      <Form />
      {loadSpinner && <Spinner />}
      <Tasks />
    </main>
  );
};

export default Main;
