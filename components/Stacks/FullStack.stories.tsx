import React from "react";
import { Meta, Story } from '@storybook/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import {
  CogIcon,
  CollectionIcon,
  MapIcon,
  UserGroupIcon,
  RssIcon,
  CheckIcon,
    ChartBarIcon,
    CheckCircleIcon,
    CursorClickIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    ViewGridIcon,
  } from '@heroicons/react/outline';
const solutions: MenuItem[] = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: ViewGridIcon,
    },
  ]  
  
  const callsToAction: MenuItem[] = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'View All Products', href: '#', icon: CheckCircleIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]

  const sidebarNavigation = [
    { name: 'Supplier List', href: '#', icon: CollectionIcon, current: true },
    { name: 'Table Demo', href: 'table-demo', icon: ViewGridIcon, current: false },
    { name: 'Supplier Approval', href: '#', icon: CheckIcon, current: false },
    { name: 'Compliance', href: '#', icon: CheckCircleIcon, current: false },
    { name: 'Contacts', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Maps', href: '#', icon: MapIcon, current: false },
    { name: 'Activity', href: '#', icon: RssIcon, current: false },
    { name: 'Admin', href: '#', icon: CogIcon, current: false },
  ]
  const solEntity = { id: "SOLUTIONS", items: solutions };
  const callEntity = { id: "CTAS", items: callsToAction };
  const sidebarNavigationEntity = { id: "SIDEMENU", items: sidebarNavigation };

  
import FullStack, { FullStackProps } from './FullStack';
import { MenuItem } from "./StackTypes";

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
export const NoMenuItems = Template.bind({})
NoMenuItems.args = {
  menus: []
};
NoMenuItems.parameters = {
  jest: ['FullStack.test.tsx']
};

export const WithMenuItems = Template.bind({})
WithMenuItems.args = {
  menus: [solEntity, callEntity, sidebarNavigationEntity]
};



