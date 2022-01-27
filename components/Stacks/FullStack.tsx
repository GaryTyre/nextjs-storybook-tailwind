import React, { useState, Fragment } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import TopMenu from './TopMenu/TopMenu'
import { Breadcrumbs}  from '../Breadcrumbs'
import SideMenu from './SideMenu/SideMenu'
import SideMenuMobile from './SideMenu/SideMenuMobile'
import { ContentArea } from '../ContentArea/ContentArea'
import { StackMenus, TOPMENU, SIDEMENU } from './StackTypes'

export type FullStackProps = {
  children: React.ReactNode;
  menus: StackMenus;
}

export const FullStack: React.FC<FullStackProps> = ({
  children,
  menus,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileSideMenu = () => {
    setMobileMenuOpen(false);
  };
  const sideMenu = menus?.find(m => m.id === 'SIDEMENU');

  return (
    <Fragment>
      <TopMenu menus={menus}></TopMenu>
      <div className="flex h-full">
        <SideMenu menu={sideMenu}></SideMenu>
        <SideMenuMobile isOpen={mobileMenuOpen} closeMenu={closeMobileSideMenu}></SideMenuMobile>

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="w-full">
            <div className="relative z-10 flex flex-shrink-0 h-12 bg-white border-b border-gray-200 shadow-sm">
              <button
                type="button"
                className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
              </button>
              <Breadcrumbs></Breadcrumbs>
            </div>
          </header>

          <ContentArea>
            { children }
          </ContentArea>
        </div>
      </div>
    </Fragment>
  )
}

export default FullStack;