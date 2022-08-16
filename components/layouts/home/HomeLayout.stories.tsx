import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeLayout, { IHomeLayout } from './HomeLayout';
import { mockBaseTemplateProps } from './HomeLayout.mocks';

export default {
  title: 'templates/HomeLayout',
  component: HomeLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeLayout> = (args) => (
  <HomeLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IHomeLayout;
