import "../styles/globals.css";

import * as NextImage from "next/image";

import { setupWorker, rest } from "msw";

import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

if (typeof global.process === "undefined") {
  const worker = setupWorker(
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Doh" }));
    })
  );
  worker.start();
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withTests({
    results,
  }),
];