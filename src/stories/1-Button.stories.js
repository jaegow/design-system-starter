import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// todo: create a wrapper/HOC for design system components
// todo: wrapper/HOC adds a map of types and states that can be iterated to show all of them in the design system
// todo: each component may want to follow the types pattern so it can refernce that to determine its function or view
// todo: each component may want to follow the state pattern to append classes, functionality, or other aspects

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
