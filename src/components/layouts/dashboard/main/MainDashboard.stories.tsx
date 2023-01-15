import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainDashboard from './MainDashboard';
import { mockBaseTemplateProps } from './MainDashboard.mocks';

export default {
  title: 'templates/MainDashboard',
  component: MainDashboard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MainDashboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainDashboard> = (args) => (
  <MainDashboard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
};
