import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import IconButton from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

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

export const Small = Template.bind({});
Small.args = {
  children: <SearchIcon width={20} height={20} />,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  children: <SearchIcon />,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children: <SearchIcon />,
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <SearchIcon />,
  disabled: true,
};
