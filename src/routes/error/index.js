import React from 'react';
import ErrorPage from './ErrorPage';

function action() {
  return {
    title: 'Error',
    component: <ErrorPage />,
  };
}

export default action;
