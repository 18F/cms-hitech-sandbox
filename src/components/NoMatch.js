import React from 'react';

const NoMatch = ({ location }) => (
  <div className="center">
    <h3>
      Sorry! There's nothing at <code>{location.pathname}</code>
    </h3>
  </div>
);

export default NoMatch;
