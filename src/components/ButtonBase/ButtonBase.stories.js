import React from 'react';
import ButtonBase from './ButtonBase';

export default {
  title: 'Components/ButtonBase',
  component: ButtonBase,
};

const Template = (args) => <ButtonBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};
