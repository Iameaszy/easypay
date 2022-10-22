import { ComponentMeta, ComponentStory } from '@storybook/react';
import DashboardHeader from './DashboardHeader';
import { mockBaseTemplateProps } from './DashboardHeader.mocks';

export default {
  title: 'templates/DashboardHeader',
  component: DashboardHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DashboardHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardHeader> = (args) => (
  <DashboardHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
};
