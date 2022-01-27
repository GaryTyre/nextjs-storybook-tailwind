import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TopMenuUserMenu() {
    return (
    <Menu as="div" className="relative ml-3">
        <div>
        <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={user.imageUrl} alt="" />
        </Menu.Button>
        </div>
        <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
                {({ active }) => (
                <a
                    href={item.href}
                    className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                    )}
                >
                    {item.name}
                </a>
                )}
            </Menu.Item>
            ))}
        </Menu.Items>
        </Transition>
    </Menu>
    )
}