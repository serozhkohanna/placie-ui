import React from 'react';

import './index.css';

import { Button, Heading } from 'placie-ui';

const App = () => {
  return <>
    <Button />
    <Heading
      text="Title text"
      level={1}
    />
    <Heading
      text="Title text second"
      level={2}
    />
  </>;
};

export default App;
