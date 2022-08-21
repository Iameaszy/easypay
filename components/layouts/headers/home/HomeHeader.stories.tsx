import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeHeader, { IHomeHeader } from './HomeHeader';
import { mockBaseTemplateProps } from './HomeHeader.mocks';

export default {
  title: 'templates/HomeHeader',
  component: HomeHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeHeader> = (args) => (
  <HomeHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IHomeHeader;
