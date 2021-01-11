import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import IconButton from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <SearchIcon />,
};

export const Primary = Template.bind({});
Primary.args = {
  children: <SearchIcon />,
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <SearchIcon />,
  color: 'secondary',
};
