/* eslint-disable brace-style */
// == Import
import './style.scss';
import '../../assets/css/font-awesome.css';
import '../../assets/css/bulma.css';

import Header from '../Header';
import Main from '../Main';
import Spinner from '../Spinner';

// == Composant
const App = () => {
  console.log('------ rendu ------');
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

// == Export
export default App;
