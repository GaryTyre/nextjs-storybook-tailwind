import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';

const pages = [
  { name: 'Supplier List', href: '#', current: false },
  { name: 'Supplier A', href: '#', current: true },
]

export default function Breadcrumbs() {
  return (
    <nav className="flex ml-5" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-300 hover:text-gray-400">
              <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-gray-300" aria-hidden="true" />
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}