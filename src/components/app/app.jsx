import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {films} = props;

  return (
    <MainPage/>
  );
};

// App.propTypes = {
//   films: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired,
//         genre: PropTypes.string.isRequired,
//         released: PropTypes.number.isRequired
//       })
//   ).isRequired
// };
export default App;