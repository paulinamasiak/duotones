import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Input',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Input',
  color: 'secondary',
};

export const Bare = Template.bind({});
Bare.args = {
  placeholder: 'Input',
  variant: 'bare',
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Input',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: 'Input',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Input',
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 'Read-only',
  readOnly: true,
};
