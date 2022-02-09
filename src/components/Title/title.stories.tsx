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
  children: 'Heading XL',
  as: 'h1',
};

export const HeadingL = Template.bind({});
HeadingL.args = {
  children: 'Heading L',
  as: 'h2',
};

export const HeadingM = Template.bind({});
HeadingM.args = {
  children: 'Heading M',
  as: 'h3',

};

export const HeadingS = Template.bind({});
HeadingS.args = {
  children: 'Heading S',
  as: 'h4',

};

export const HeadingXS = Template.bind({});
HeadingXS.args = {
  children: 'Heading XS',
  as: 'h5',
};

export const subHeading = Template.bind({});
subHeading.args = {
  children: 'Sub Heading',
  as: 'h6',
};