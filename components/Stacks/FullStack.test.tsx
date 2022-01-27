/* eslint-env jest */
import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { findByText } from '@testing-library/dom'
import "@testing-library/jest-dom/extend-expect";
//👇 Imports a specific story for the test
import { Default } from "./FullStack.stories";
import userEvent from '@testing-library/user-event';
// import { sampleMenu } from "../../utils/test-menu-utils";
// import { SideMenuContext } from "../../contexts/SideMenuContext";

describe("FullStack", () => {
  it("renders the component", () => {
    const tree = render(<Default {...Default.args} />);
    expect(tree.container).toMatchSnapshot();
  });
  it("renders the component with the correct children ", async () => {
   const container = render(<Default {...Default.args} ><p id="stack">STACK</p></Default>);
   expect(await findByText(container.container, 'STACK')).toBeVisible();
  });
  // it("renders the component with the correct menu items ", async () => {
  //  const container = render(<Default {...Default.args} menuItems={sampleMenu} />);
  // sampleMenu.forEach(async menuItem => {
  //   expect(await findByText(container.container, `${menuItem}`)).toBeVisible();
  // })
  // });
  test("Should call the supplied logout handler", async () => {
    const logoutHandler = jest.fn();
    const tree = render(<Default {...Default.args} logout={logoutHandler} />);
    const btn = screen.getByRole("button", {
      name: /Logout/i,
    });
    userEvent.click(btn);
    await waitFor(() => expect(logoutHandler).toHaveBeenCalled());
    expect(tree.container).toMatchSnapshot();
  });
  it('user can see and click a button to open the sidemenu (calls SideMenuContext.sideMenu.toggleOpen', async () => {
    const sideMenu =  { 
      open: false, 
      toggleOpen: jest.fn(),
     }; 
  //   <SideMenuContext.Provider value={{ sideMenu: sideMenu}}>
  //   <Default {...Default.args} />
  // </SideMenuContext.Provider>
    const buttonHandler = jest.fn();
    const tree = render(<Default {...Default.args} />)
    const btn = screen.getByRole("button", {
      name: /Open sidebar/i,
    });
    userEvent.click(btn);
    await waitFor(() => expect(sideMenu.toggleOpen).toHaveBeenCalled())
    expect(tree.container).toMatchSnapshot()
  });
});
