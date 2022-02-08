import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';

export default {
  title: 'Components / Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}/>;

export const Display = Template.bind({});
Display.args = {
  children: 'Display',
  size: 'x-large',
};

export const HeadingL = Template.bind({});
HeadingL.args = {
  children: 'Heading L',
  size: 'large',
};

export const HeadingM = Template.bind({});
HeadingM.args = {
  children: 'Heading M',
  size: 'medium',
};

export const HeadingS = Template.bind({});
HeadingS.args = {
  children: 'Heading S',
  size: 'small',
};

export const HeadingXS = Template.bind({});
HeadingXS.args = {
  children: 'Heading XS',
  size: 'x-small',
};

export const subHeading = Template.bind({});
subHeading.args = {
  children: 'Sub Heading',
  size: 'xx-small',
};