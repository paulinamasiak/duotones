import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Button',
  color: 'primary',
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  color: 'primary',
  disabled: true,
};
