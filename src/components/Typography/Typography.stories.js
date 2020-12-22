import React from 'react';
import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Typography',
};

export const H1 = Template.bind({});
H1.args = {
  children: 'h1. Heading',
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  children: 'h2. Heading',
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  children: 'h3. Heading',
  variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  children: 'h4. Heading',
  variant: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  children: 'h5. Heading',
  variant: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  children: 'h6. Heading',
  variant: 'h6',
};
