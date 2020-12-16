import React from 'react';

import Sidebar from './Sidebar';

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Basic = Template.bind({});
