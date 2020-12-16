import React from 'react';

import TopBar from './TopBar';

export default {
  title: 'Example/TopBar',
  component: TopBar,
};

const Template = (args) => <TopBar {...args} />;

export const Basic = Template.bind({});
