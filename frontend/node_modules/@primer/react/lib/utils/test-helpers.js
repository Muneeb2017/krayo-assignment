'use strict';

var node_util = require('node:util');

// JSDOM doesn't mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn()
  };
});
global.CSS = {
  escape: jest.fn(),
  supports: jest.fn().mockImplementation(() => {
    return false;
  })
};
global.TextEncoder = node_util.TextEncoder;
