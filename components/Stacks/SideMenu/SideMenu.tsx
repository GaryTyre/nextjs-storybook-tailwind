import React from 'react'

import { Menu } from '../StackTypes'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

  export type SideMenuProps = {
    menu: Menu;
  }
export default function SideMenu({ menu }: SideMenuProps) {
    return (
        <div className="hidden overflow-y-auto bg-gray-700 w-28 md:block">
          <div className="flex flex-col items-center w-full py-2">
            <div className="flex-1 w-full px-2 space-y-1">
              {menu?.items.map((item) => (
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