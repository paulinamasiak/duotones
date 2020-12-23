import React from 'react';
import DuotoneImg from './DuotoneImg';
import photo from './photo.jpg';

export default {
  title: 'Components/DuotoneImg',
  component: DuotoneImg,
};

const Template = (args) => <DuotoneImg {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: photo,
};
