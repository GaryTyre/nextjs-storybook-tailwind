
import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Menu } from '../StackTypes';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export type NavigationProps = {
  menus: Menu[];
}
export default function Navigation({ menus }: NavigationProps) {
  const solutions = menus?.find(m => m.id === 'SOLUTIONS')?.items;
  const calls = menus?.find(m => m.id === 'CTAS')?.items;
    return (
        <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium py-2 px-1',
                        'hover:text-gray-900',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800'
                      )}
                    >
                      <span>Supplier Manager</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 hidden transform bg-white shadow-lg md:block top-full">
                        <div className="grid w-full px-4 py-6 mx-auto gap-y-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions?.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex flex-col justify-between p-3 -m-3 rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md sm:h-12 sm:w-12">
                                    <item.icon className="w-6 h-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                                    Learn more <span aria-hidden="true">&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50">
                          <div className="w-full px-4 py-5 mx-auto space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {calls?.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
    )
}