import React from 'react';

const NoMatch = ({ location }) => {
  return (
    <div>
      <h2>Whoops</h2>
      <p>{`Sorry but ${location.pathname} didn’t match any pages`}</p>
    </div>
  );
};

export default NoMatch;