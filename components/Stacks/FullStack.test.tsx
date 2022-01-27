/* eslint-env jest */
import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { findByText } from '@testing-library/dom'
import "@testing-library/jest-dom/extend-expect";
//👇 Imports a specific story for the test
import { NoMenuItems, WithMenuItems } from "./FullStack.stories";
import userEvent from '@testing-library/user-event';
// import { sampleMenu } from "../../utils/test-menu-utils";
// import { SideMenuContext } from "../../contexts/SideMenuContext";

describe("FullStack", () => {
  it("renders the component NoMenuItems", () => {
    const tree = render(<NoMenuItems {...NoMenuItems.args} />);
    expect(tree.container).toMatchSnapshot();
  });
  it("renders the component WithMenuItems", () => {
    const tree = render(<WithMenuItems {...WithMenuItems.args} />);
    expect(tree.container).toMatchSnapshot();
  });  
});
