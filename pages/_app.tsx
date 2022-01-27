import { FullStack } from '../components';
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

import '../styles/globals.css';
import { MenuItem } from '../components/Stacks/StackTypes';

function MyApp({ Component, pageProps }) {
  return <FullStack menus={[solEntity, callEntity, sidebarNavigationEntity]}><Component {...pageProps} /></FullStack>
}

export default MyApp
