/* eslint-disable import/no-extraneous-dependencies */
// import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// import 'jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each';

const mockResponse = (status: number, statusText: string, response: any) => {
  return new window.Response(response, {
    statusText,
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = dom.window;
// global.document = dom.window.document;
// global.HTMLElement = dom.window.HTMLElement;

// workaround to prevent transition on table components breaking tests
global.requestAnimationFrame = () => {
  return 0;
};
global.cancelAnimationFrame = () => {
  return 0;
};

// global.fetch = jest
//   .fn()
//   .mockImplementation(() => Promise.resolve(mockResponse(200, 'grand', [])));

// jest.setTimeout(30000);
// configure({ adapter: new Adapter() });
