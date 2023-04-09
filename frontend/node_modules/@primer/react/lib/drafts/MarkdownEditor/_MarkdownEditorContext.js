'use strict';

var React = require('react');

const MarkdownEditorContext = /*#__PURE__*/React.createContext({
  disabled: false,
  condensed: false,
  required: false,
  formattingToolsRef: {
    current: null
  }
});

exports.MarkdownEditorContext = MarkdownEditorContext;
