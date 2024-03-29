import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'

import {
    CogIcon,
    CollectionIcon,
    MapIcon,
    UserGroupIcon,
    ViewGridIcon,
    RssIcon,
    CheckCircleIcon,
    CheckIcon,
    XIcon
  } from '@heroicons/react/outline'
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const sidebarNavigation = [
      { name: 'Supplier List', href: '#', icon: CollectionIcon, current: false },
      { name: 'Customer\nApproved List', href: '#', icon: ViewGridIcon, current: false },
      { name: 'Supplier Approval', href: '#', icon: CheckIcon, current: true },
      { name: 'Compliance', href: '#', icon: CheckCircleIcon, current: false },
      { name: 'Contacts', href: '#', icon: UserGroupIcon, current: false },
      { name: 'Maps', href: '#', icon: MapIcon, current: false },
      { name: 'Activity', href: '#', icon: RssIcon, current: false },
      { name: 'Admin', href: '#', icon: CogIcon, current: false },
    ]

export type Props = {
    isOpen?: boolean;
    closeMenu: (value: boolean) => void //TODO Review
}
  
export const SideMenuMobile = ({ isOpen, closeMenu }: Props): JSX.Element => {
      return (
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="md:hidden" onClose={closeMenu}>
          <div className="fixed inset-0 z-40 flex">
              <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
              >
                <div className="relative max-w-xs w-full bg-gray-700 pt-5 pb-4 flex-1 flex flex-col">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="absolute top-1 right-0 -mr-14 p-1">
                        <button
                        type="button"
                        className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => closeMenu }
                        >
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        <span className="sr-only">Close sidebar</span>
                        </button>
                    </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 px-4 flex items-center">
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        alt="Workflow"
                    />
                    </div>
                    <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                    <nav className="h-full flex flex-col">
                        <div className="space-y-1">
                        {sidebarNavigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-100 hover:bg-gray-800 hover:text-white',
                                'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            <item.icon
                                className={classNames(
                                item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                                'mr-3 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span>{item.name}</span>
                            </a>
                        ))}
                        </div>
                    </nav>
                    </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
          </div>
          </Dialog>
      </Transition.Root>
      )
  }

  export default SideMenuMobile;