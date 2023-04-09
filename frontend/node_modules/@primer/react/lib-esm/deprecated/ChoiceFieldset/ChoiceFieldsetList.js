import React__default from 'react';
import styled from 'styled-components';
import { get } from '../../constants.js';
import { Slot } from './ChoiceFieldset.js';
import ChoiceFieldsetListContext from './ChoiceFieldsetListContext.js';
import { useSSRSafeId } from '@react-aria/ssr';

const List = styled.ul.withConfig({
  displayName: "ChoiceFieldsetList__List",
  componentId: "sc-o960a8-0"
})(["display:flex;flex-direction:column;list-style:none;margin:0;padding:0;> li + li{margin-top:", ";}"], get('space.2'));
const getSelectedCheckboxes = (value, checked, selectedValues, selectionVariant) => {
  if (checked) {
    return selectionVariant === 'multiple' ? [...selectedValues, value] : [value];
  }
  return selectedValues.filter(selectedValue => selectedValue !== value);
};
const ChoiceFieldsetList = ({
  selectionVariant = 'single',
  children
}) => {
  const ssrSafeUniqueName = useSSRSafeId();
  return /*#__PURE__*/React__default.createElement(Slot, {
    name: "ChoiceList"
  }, ({
    name,
    onSelect,
    disabled,
    selected = []
  }) => {
    return /*#__PURE__*/React__default.createElement(ChoiceFieldsetListContext.Provider, {
      value: {
        disabled,
        selected,
        name: name || ssrSafeUniqueName,
        onChange: e => {
          const updatedSelections = getSelectedCheckboxes(e.currentTarget.value, e.currentTarget.checked, selected, selectionVariant);
          onSelect && onSelect(updatedSelections);
        },
        selectionVariant
      }
    }, /*#__PURE__*/React__default.createElement(List, null, React__default.Children.map(children, (child, i) => /*#__PURE__*/React__default.createElement("li", {
      key: i
    }, child))));
  });
};
ChoiceFieldsetList.displayName = "ChoiceFieldsetList";
var ChoiceFieldsetList$1 = ChoiceFieldsetList;

export { ChoiceFieldsetList$1 as default };
