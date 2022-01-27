import propTypes from 'prop-types';
import Tasks from '../Tasks';
import Form from '../Form';

const Main = ({
  tasks,
  categories,
  setEditMode,
  editMode,
}) => (
  <main>
    <Form categories={categories} />
    <Tasks setEditMode={setEditMode} tasks={tasks} editMode={editMode} />
  </main>
);

Main.propTypes = {
  tasks: propTypes.array.isRequired,
  categories: propTypes.array.isRequired,
  setEditMode: propTypes.func.isRequired,
  editMode: propTypes.bool.isRequired,
};

export default Main;
