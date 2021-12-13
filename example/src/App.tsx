import React from 'react';

import './index.css';

import { Button, Heading, Input } from 'placie-ui';

const App = () => {
  const handleClick = () => {
    console.log('click');
  };

  return <>
    <Button
      text="BUTTON"
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
    <Input
      label="Enter place"
      type="text"
      value="text text"
      placeholder="please enter smth"
      name="field-input"
      isRequired
      onChange={() => console.log('text')}
    />
  </>;
};

export default App;
