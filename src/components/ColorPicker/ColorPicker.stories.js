import React from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
};

const Template = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});
