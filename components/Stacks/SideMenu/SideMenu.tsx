import React, { Fragment } from 'react'

import {
  CogIcon,
  CollectionIcon,
  MapIcon,
  UserGroupIcon,
  ViewGridIcon,
  RssIcon,
  CheckCircleIcon,
  CheckIcon
} from '@heroicons/react/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const sidebarNavigation = [
    { name: 'Supplier List', href: '#', icon: CollectionIcon, current: true },
    { name: 'Customer\nApproved List', href: '#', icon: ViewGridIcon, current: false },
    { name: 'Supplier Approval', href: '#', icon: CheckIcon, current: false },
    { name: 'Compliance', href: '#', icon: CheckCircleIcon, current: false },
    { name: 'Contacts', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Maps', href: '#', icon: MapIcon, current: false },
    { name: 'Activity', href: '#', icon: RssIcon, current: false },
    { name: 'Admin', href: '#', icon: CogIcon, current: false },
  ]

export default function SideMenu() {
    return (
        <div className="hidden w-28 bg-gray-700 overflow-y-auto md:block">
          <div className="w-full py-2 flex flex-col items-center">
            <div className="flex-1 w-full px-2 space-y-1">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-800 text-white' : 'text-gray-100 hover:bg-gray-800 hover:text-white',
                    'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium text-center'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                      'h-8 w-8',
                      true ? '' : 'text-white bg-green-900 rounded-full p-1'
                    )}
                    aria-hidden="true"
                  />
                  <span className="mt-2">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
    )
}