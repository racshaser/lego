import React from 'react';
import PropTypes from 'prop-types';

import StyleContext from 'isomorphic-style-loader/StyleContext';

const ApplicationContext = React.createContext({});

export default function App({ context, insertCss, children }) {
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <ApplicationContext.Provider value={{ context }}>
        {React.Children.only(children)}
      </ApplicationContext.Provider>
    </StyleContext.Provider>
  );
}

App.propTypes = {
  insertCss: PropTypes.func.isRequired,
  context: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object,
  }).isRequired,
  children: PropTypes.element.isRequired,
};
