import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from './Paragraph';

export default {
  title: 'Components / Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args}/>;

export const Bold = Template.bind({});
Bold.args = {
  children: 'Bold',
  weight: 'bold',
  color: 'darkHigh'
};

export const Regular = Template.bind({});
Regular.args = {
  children: 'Regular',
  weight: 'regular',
  color: 'darkHigh'
};