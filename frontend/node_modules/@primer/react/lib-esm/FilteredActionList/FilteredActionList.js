import React__default, { useCallback, useRef, useEffect } from 'react';
import { ActionList } from '../deprecated/ActionList/index.js';
import { useFocusZone } from '../hooks/useFocusZone.js';
import { useProvidedStateOrCreate } from '../hooks/useProvidedStateOrCreate.js';
import styled from 'styled-components';
import { get } from '../constants.js';
import { useProvidedRefOrCreate } from '../hooks/useProvidedRefOrCreate.js';
import useScrollFlash from '../hooks/useScrollFlash.js';
import { scrollIntoView } from '@primer/behaviors';
import { useId } from '../hooks/useId.js';
import Box from '../Box/Box.js';
import TextInput from '../TextInput/TextInput.js';
import Spinner from '../Spinner/Spinner.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const menuScrollMargins = {
  startMargin: 0,
  endMargin: 8
};
const StyledHeader = styled.div.withConfig({
  displayName: "FilteredActionList__StyledHeader",
  componentId: "sc-1oqgb0s-0"
})(["box-shadow:0 1px 0 ", ";z-index:1;"], get('colors.border.default'));
function FilteredActionList({
  loading = false,
  placeholderText,
  filterValue: externalFilterValue,
  onFilterChange,
  items,
  textInputProps,
  inputRef: providedInputRef,
  sx,
  ...listProps
}) {
  const [filterValue, setInternalFilterValue] = useProvidedStateOrCreate(externalFilterValue, undefined, '');
  const onInputChange = useCallback(e => {
    const value = e.target.value;
    onFilterChange(value, e);
    setInternalFilterValue(value);
  }, [onFilterChange, setInternalFilterValue]);
  const scrollContainerRef = useRef(null);
  const listContainerRef = useRef(null);
  const inputRef = useProvidedRefOrCreate(providedInputRef);
  const activeDescendantRef = useRef();
  const listId = useId();
  const onInputKeyPress = useCallback(event => {
    if (event.key === 'Enter' && activeDescendantRef.current) {
      event.preventDefault();
      event.nativeEvent.stopImmediatePropagation();

      // Forward Enter key press to active descendant so that item gets activated
      const activeDescendantEvent = new KeyboardEvent(event.type, event.nativeEvent);
      activeDescendantRef.current.dispatchEvent(activeDescendantEvent);
    }
  }, [activeDescendantRef]);
  useFocusZone({
    containerRef: listContainerRef,
    focusOutBehavior: 'wrap',
    focusableElementFilter: element => {
      return !(element instanceof HTMLInputElement);
    },
    activeDescendantFocus: inputRef,
    onActiveDescendantChanged: (current, previous, directlyActivated) => {
      activeDescendantRef.current = current;
      if (current && scrollContainerRef.current && directlyActivated) {
        scrollIntoView(current, scrollContainerRef.current, menuScrollMargins);
      }
    }
  }, [
  // List ref isn't set while loading.  Need to re-bind focus zone when it changes
  loading]);
  useEffect(() => {
    // if items changed, we want to instantly move active descendant into view
    if (activeDescendantRef.current && scrollContainerRef.current) {
      scrollIntoView(activeDescendantRef.current, scrollContainerRef.current, {
        ...menuScrollMargins,
        behavior: 'auto'
      });
    }
  }, [items]);
  useScrollFlash(scrollContainerRef);
  return /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    sx: sx
  }, /*#__PURE__*/React__default.createElement(StyledHeader, null, /*#__PURE__*/React__default.createElement(TextInput, _extends({
    ref: inputRef,
    block: true,
    width: "auto",
    color: "fg.default",
    value: filterValue,
    onChange: onInputChange,
    onKeyPress: onInputKeyPress,
    placeholder: placeholderText,
    "aria-label": placeholderText,
    "aria-controls": listId
  }, textInputProps))), /*#__PURE__*/React__default.createElement(Box, {
    ref: scrollContainerRef,
    overflow: "auto"
  }, loading ? /*#__PURE__*/React__default.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    pt: 6,
    pb: 7
  }, /*#__PURE__*/React__default.createElement(Spinner, null)) : /*#__PURE__*/React__default.createElement(ActionList, _extends({
    ref: listContainerRef,
    items: items
  }, listProps, {
    role: "listbox",
    id: listId
  }))));
}
FilteredActionList.displayName = "FilteredActionList";
FilteredActionList.displayName = 'FilteredActionList';

export { FilteredActionList };
