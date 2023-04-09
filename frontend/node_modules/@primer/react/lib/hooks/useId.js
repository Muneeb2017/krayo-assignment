'use strict';

var React = require('react');
var ssr = require('@react-aria/ssr');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

// eslint-disable-next-line import/no-namespace

/**
 * Detect if `React.useId()` is present. This strategy is a workaround for:
 * https://github.com/webpack/webpack/issues/14814
 *
 * This technique is inspired by Material UI:
 * https://github.com/mui/material-ui/blob/7bc478ec00a3b5625427f36c827e00b0a17be3d0/packages/mui-utils/src/useId.ts#L21
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-useless-concat
const useReactId = React__namespace['useId' + ''];
function useId(id) {
  // Force useSSRSafeId in test environments to maintain snapshot parity between
  // major versions of React
  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return ssr.useSSRSafeId(id);
  }
  if (useReactId !== undefined) {
    if (id) {
      return id;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useReactId();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return ssr.useSSRSafeId(id);
}

exports.useId = useId;
