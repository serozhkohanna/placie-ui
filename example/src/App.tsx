import React from 'react';

import './index.css';

import { Button, Heading, Input, SearchInput, Select, Toggle, Tag, HeartButton, IconButton, Like } from 'placie-ui';

import { FaInfoCircle, FaHeart } from 'react-icons/fa';

const App = () => {
  const handleClick = () => {
    console.log('click');
  };

  return <>
    <Button
      level={1}
      disabled={false}
      onClick={handleClick}
      text="text"
    />
    <Button
      level={1}
      disabled={false}
      onClick={() => console.log('click')}
      text="SAVE"
    >
      <FaHeart />
    </Button>
    <Button
      level={2}
      disabled={false}
      onClick={() => console.log('click')}
      text="SECOND"
    >
    </Button>
    <Button
      level={3}
      disabled={false}
      onClick={() => console.log('click')}
      text="use current location"
    >
      <FaInfoCircle />
    </Button>
    <Heading
      text="Title text first"
      level={1}
    />
    <Heading
      text="Title text second"
      level={2}
    />
    <Heading
      text="Heading text third"
      level={3}
    />
    <Heading
      text="Heading text fourth"
      level={4}
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

    <Tag
      text="Word"
      onClose={() => console.log('close')}
      hasCloseButton
    />
    <Tag text="JUST TAG" />

    <HeartButton onClose={() => console.log('close')} />
    <IconButton onClose={() => console.log('close')}>
      <FaHeart />
    </IconButton>

    <Like
      onClick={(value: boolean) => console.log(value)}
      hasLike={false}
    />
    <Like
      onClick={(value: boolean) => console.log(value)}
      hasLike
    />
  </>;
};

export default App;
