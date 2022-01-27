import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import TopMenuUserMenu from './UserMenu'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'

export default function TopMenu() {
  return (
    <Popover className="relative bg-white">
      <div className="relative z-20">
    <div className="absolute inset-0 shadow  pointer-events-none" aria-hidden="true" />
        <div className="w-full mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="#" className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://media-exp1.licdn.com/dms/image/C510BAQHThKCx51J1GQ/company-logo_200_200/0/1519870029475?e=1651104000&v=beta&t=xfUhWsU-_P0O1P0hHo3YV_JXIvZX8wqgmTstBJMp9KM"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Navigation></Navigation>
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
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <NavigationMobile></NavigationMobile>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
