import React__default from 'react';

// Inspired from reach-ui: https://github.com/reach/reach-ui/blob/develop/packages/utils/src/use-force-update.ts
const useForceUpdate = () => {
  const [, rerender] = React__default.useState({});
  return React__default.useCallback(() => rerender({}), []);
};

export { useForceUpdate };
