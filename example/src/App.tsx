import React from 'react';

import './index.css';

import { Button, Heading, Input, SearchInput, Select, Toggle, Tag } from 'placie-ui';

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
    <SearchInput
      value=""
      placeholder="please enter smth"
      onChange={() => console.log('text')}
      onClick={() => console.log('text')}
    />

    <Select
      label="Choose distance"
      name="select"
      onChange={(value: string) => console.log(value, 'current value')}
      isRequired
      options={[
        {
          value: 'string',
          label: 'string',
          id: 'string',
          selected: true,
        },
        {
          value: 'string2',
          label: 'string2',
          id: 'string2',
          selected: false,
        },
      ]}
    />
    <Toggle
      isToggled={true}
      onChange={() => console.log('toggle')}
    />

    <Tag />
  </>;
};

export default App;
