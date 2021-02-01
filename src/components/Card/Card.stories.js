import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => (
  <Card style={{ width: '128px', height: '128px' }} {...args} />
);

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
