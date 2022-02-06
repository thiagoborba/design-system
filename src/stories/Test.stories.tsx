import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Test } from './Test';

export default {
  title: 'Example/Test',
  component: Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Test1 = Template.bind({});
export const Test2 = Template.bind({});
Test1.args = {
  label: '1asdasd'
}

Test2.args = {
  label: '1a1111111sdasd'
}