import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeHeader, { IHomeHeader } from './HomeHeader';
import { mockBaseTemplateProps } from './HomeHeader.mocks';

const breakpoints = {
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};
const theme = extendTheme({ breakpoints });

export default {
  title: 'templates/HomeHeader',
  component: HomeHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeHeader> = (args) => (
  <ChakraProvider theme={theme}>
    <HomeHeader {...args} />
  </ChakraProvider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IHomeHeader;
