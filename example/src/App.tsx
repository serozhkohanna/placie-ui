import React from 'react';

import './index.css';

import { Button, Heading } from 'placie-ui';

const App = () => {
  const handleClick = () => {
    console.log('click');
  }

  return <>
    <Button
      text='BUTTON'
      level={1}
      disabled={false}
      onClick={handleClick}
    />
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
