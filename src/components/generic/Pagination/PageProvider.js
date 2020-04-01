import React from 'react';
import PropTypes from 'prop-types';

const PageContext = React.createContext(1);

const PageProvider = ({ children }) => {
  const [currentPage, setPage] = React.useState(1);
  const value = { currentPage, setPage };
  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};

const usePageContext = () => {
  const context = React.useContext(PageContext);
  if (!context) {
    throw new Error('Toggle component cannot be rendered outside the component');
  }
  return context;
};

PageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { PageProvider, usePageContext };
