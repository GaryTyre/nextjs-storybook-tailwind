import React, { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import TopMenuUserMenu from './UserMenu'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'
import { Menu } from '../StackTypes'

export type TopMenuProps = {
  menus: Menu[];
}
export default function TopMenu({ menus }: TopMenuProps) {
  return (
    <Popover className="relative bg-white">
      <div className="relative z-20">
    <div className="absolute inset-0 shadow pointer-events-none" aria-hidden="true" />
        <div className="flex items-center justify-between w-full px-4 py-5 mx-auto sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://media-exp1.licdn.com/dms/image/C510BAQHThKCx51J1GQ/company-logo_200_200/0/1519870029475?e=1651104000&v=beta&t=xfUhWsU-_P0O1P0hHo3YV_JXIvZX8wqgmTstBJMp9KM"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Navigation menus={menus}></Navigation>
            <TopMenuUserMenu></TopMenuUserMenu>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
        >
          <NavigationMobile></NavigationMobile>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
