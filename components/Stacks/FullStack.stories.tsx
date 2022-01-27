import React from "react";
import { Meta, Story } from '@storybook/react';
import FullStack, { FullStackProps } from './FullStack';

export default {
  title: 'Components/Stacks/FullStack',
  component: FullStack,
  argTypes: {
    children: { control: 'string'},
    isSideMenuOpen: { control: 'boolean'},
    // handleClick: { action: 'clicked' }
  },
  decorators: [],
  parameters: { 
    jest: ['FullStack.test.tsx'],
    actions: { argTypesRegex: '^on.*' },
    // initialState: {
    //   defaultValue: {
    //     sideMenu: {
    //       open: true
    //     }
    //   },
    // },
 },
} as Meta;

const Template: Story<FullStackProps> = (args) => <FullStack {...args} ><p>children</p></FullStack>
// export const myStory = (_, { context: [state, dispatch] }) => (
//   <button onClick={() => dispatch({ text: 'Changed' })}>{state.text}</button>
// );
// Default scenario
export const Default = Template.bind({})
Default.args = {};
Default.parameters = {
  jest: ['FullStack.test.tsx']
};

export const Closed = Template.bind({})
Closed.args = {};


