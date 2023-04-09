import React__default from 'react';
import { useResponsiveValue } from '../hooks/useResponsiveValue.js';
import '../sx.js';
import { ArrowLeftIcon } from '@primer/octicons-react';
import { getBreakpointDeclarations } from '../utils/getBreakpointDeclarations.js';
import Box from '../Box/Box.js';
import Link from '../Link/Link.js';
import Heading from '../Heading/Heading.js';
import merge from 'deepmerge';

const REGION_ORDER = {
  ContextArea: 0,
  TitleArea: 1,
  Description: 2,
  Navigation: 3
};
const CONTEXT_AREA_REGION_ORDER = {
  ParentLink: 0,
  ContextBar: 1,
  ContextAreaActions: 2
};
const TITLE_AREA_REGION_ORDER = {
  LeadingAction: 0,
  LeadingVisual: 1,
  Title: 2,
  TrailingVisual: 3,
  TrailingAction: 4,
  Actions: 5
};

// Types that are shared between PageHeader children components

// Default state for the `visible` prop when a sub component is only visible on narrow viewport
const hiddenOnRegularAndWide = {
  narrow: false,
  regular: true,
  wide: true
};

// Default state for the `visible` prop when a sub component is visible on regular and wide viewport
const hiddenOnNarrow = {
  narrow: true,
  regular: false,
  wide: false
};

// Root
// -----------------------------------------------------------------------------

const Root = ({
  children,
  sx = {},
  as = 'div'
}) => {
  const rootStyles = {
    display: 'flex',
    flexDirection: 'column',
    // TODO: We used hard-coded values for the spacing and font size in this component. Update them to use new design tokens when they are ready to use.
    gap: '0.5rem'
  };
  return /*#__PURE__*/React__default.createElement(Box, {
    as: as,
    sx: merge(rootStyles, sx)
  }, children);
};
Root.displayName = "Root";
// PageHeader.ContextArea : Only visible on narrow viewports by default to provide user context of where they are at their journey. `hidden` prop available
// to manage their custom visibility but consumers should be careful if they choose to hide this on narrow viewports.
// PageHeader.ContextArea Sub Components: PageHeader.ParentLink, PageHeader.ContextBar, PageHeader.ContextAreaActions
// ---------------------------------------------------------------------
const ContextArea = ({
  children,
  hidden = hiddenOnRegularAndWide,
  sx = {}
}) => {
  const contentNavStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    order: REGION_ORDER.ContextArea,
    ...getBreakpointDeclarations(hidden, 'display', value => {
      return value ? 'none' : 'flex';
    })
  };
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge(contentNavStyles, sx)
  }, children);
};
ContextArea.displayName = "ContextArea";
// PageHeader.ParentLink : Only visible on narrow viewports by default to let users navigate up in the hierarchy.
const ParentLink = /*#__PURE__*/React__default.forwardRef(({
  children,
  sx = {},
  href,
  'aria-label': ariaLabel,
  as = 'a',
  hidden = hiddenOnRegularAndWide
}, ref) => {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Link, {
    ref: ref,
    as: as,
    "aria-label": ariaLabel,
    muted: true,
    sx: merge({
      display: 'flex',
      alignItems: 'center',
      order: CONTEXT_AREA_REGION_ORDER.ParentLink,
      gap: '0.5rem',
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      })
    }, sx),
    href: href
  }, /*#__PURE__*/React__default.createElement(ArrowLeftIcon, null), /*#__PURE__*/React__default.createElement(Box, null, children)));
});

// ContextBar
// Generic slot for any component above the title region. Use it for custom breadcrumbs and other navigation elements instead of ParentLink.
// ---------------------------------------------------------------------

const ContextBar = ({
  children,
  sx = {},
  hidden = hiddenOnRegularAndWide
}) => {
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: CONTEXT_AREA_REGION_ORDER.ContextBar,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      })
    }, sx)
  }, children);
};
ContextBar.displayName = "ContextBar";
// ContextAreaActions
// ---------------------------------------------------------------------
const ContextAreaActions = ({
  children,
  sx = {},
  hidden = hiddenOnRegularAndWide
}) => {
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      flexDirection: 'row',
      order: CONTEXT_AREA_REGION_ORDER.ContextAreaActions,
      alignItems: 'center',
      gap: '0.5rem',
      flexGrow: '1',
      justifyContent: 'right',
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      })
    }, sx)
  }, children);
};
ContextAreaActions.displayName = "ContextAreaActions";
const MEDIUM_TITLE_HEIGHT = '2rem';
const LARGE_TITLE_HEIGHT = '3rem';
const TitleAreaContext = /*#__PURE__*/React__default.createContext({
  titleVariant: 'medium',
  titleAreaHeight: MEDIUM_TITLE_HEIGHT
});
// PageHeader.TitleArea: The main title area of the page. Visible on all viewports.
// PageHeader.TitleArea Sub Components: PageHeader.LeadingAction, PageHeader.LeadingVisual,
// PageHeader.Title, PageTitle.TrailingVisual, PageHeader.TrailingAction, PageHeader.Actions
// ---------------------------------------------------------------------

const TitleArea = ({
  children,
  sx = {},
  hidden = false,
  variant = 'medium'
}) => {
  const currentVariant = useResponsiveValue(variant, 'medium');
  const height = currentVariant === 'large' ? LARGE_TITLE_HEIGHT : MEDIUM_TITLE_HEIGHT;
  return /*#__PURE__*/React__default.createElement(TitleAreaContext.Provider, {
    value: {
      titleVariant: currentVariant,
      titleAreaHeight: height
    }
  }, /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      gap: '0.5rem',
      order: REGION_ORDER.TitleArea,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      flexDirection: 'row',
      alignItems: 'flex-start'
    }, sx)
  }, children));
};
TitleArea.displayName = "TitleArea";
// PageHeader.LeadingAction and PageHeader.TrailingAction should only be visible on regular viewports.
// So they come as hidden on narrow viewports by default and their visibility can be managed by their `hidden` prop.
const LeadingAction = ({
  children,
  sx = {},
  hidden = hiddenOnNarrow
}) => {
  const {
    titleAreaHeight
  } = React__default.useContext(TitleAreaContext);
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: TITLE_AREA_REGION_ORDER.LeadingAction,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      alignItems: 'center',
      height: titleAreaHeight
    }, sx)
  }, children);
};
LeadingAction.displayName = "LeadingAction";
// PageHeader.LeadingVisual and PageHeader.TrailingVisual should remain visible on narrow viewports.
const LeadingVisual = ({
  children,
  sx = {},
  hidden = false
}) => {
  const {
    titleAreaHeight
  } = React__default.useContext(TitleAreaContext);
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: TITLE_AREA_REGION_ORDER.LeadingVisual,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      alignItems: 'center',
      height: titleAreaHeight
    }, sx)
  }, children);
};
LeadingVisual.displayName = "LeadingVisual";
const Title = ({
  children,
  sx = {},
  hidden = false,
  as = 'h2'
}) => {
  const {
    titleVariant
  } = React__default.useContext(TitleAreaContext);
  return /*#__PURE__*/React__default.createElement(Heading, {
    as: as,
    sx: merge({
      fontSize: {
        large: '2rem',
        medium: '1.25rem',
        subtitle: '1.25rem'
      }[titleVariant],
      // line-height is calculated with calc(height/font-size) and the below numbers are from @primer/primitives
      lineHeight: {
        large: 1.5,
        // calc(48/32)
        medium: 1.6,
        // calc(32/20)
        subtitle: 1.6 // calc(32/20)
      }[titleVariant],
      fontWeight: {
        large: '400',
        medium: '600',
        subtitle: '400'
      }[titleVariant],
      display: 'flex',
      order: TITLE_AREA_REGION_ORDER.Title,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      })
    }, sx)
  }, children);
};
Title.displayName = "Title";
// PageHeader.LeadingVisual and PageHeader.TrailingVisual should remain visible on narrow viewports.
const TrailingVisual = ({
  children,
  sx = {},
  hidden = false
}) => {
  const {
    titleAreaHeight
  } = React__default.useContext(TitleAreaContext);
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: TITLE_AREA_REGION_ORDER.TrailingVisual,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      alignItems: 'center',
      height: titleAreaHeight
    }, sx)
  }, children);
};
TrailingVisual.displayName = "TrailingVisual";
const TrailingAction = ({
  children,
  sx = {},
  hidden = hiddenOnNarrow
}) => {
  const {
    titleAreaHeight
  } = React__default.useContext(TitleAreaContext);
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: TITLE_AREA_REGION_ORDER.TrailingAction,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      alignItems: 'center',
      height: titleAreaHeight
    }, sx)
  }, children);
};
TrailingAction.displayName = "TrailingAction";
const Actions = ({
  children,
  sx = {},
  hidden = false
}) => {
  const {
    titleAreaHeight
  } = React__default.useContext(TitleAreaContext);
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: TITLE_AREA_REGION_ORDER.Actions,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      flexDirection: 'row',
      gap: '0.5rem',
      flexGrow: '1',
      justifyContent: 'right',
      height: titleAreaHeight,
      alignItems: 'center'
    }, sx)
  }, children);
};
Actions.displayName = "Actions";
// PageHeader.Description: The description area of the header. Visible on all viewports
const Description = ({
  children,
  sx = {},
  hidden = false
}) => {
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge({
      display: 'flex',
      order: REGION_ORDER.Description,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'flex';
      }),
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.5rem'
    }, sx)
  }, children);
};
Description.displayName = "Description";
// PageHeader.Navigation: The local navigation area of the header. Visible on all viewports
const Navigation = ({
  children,
  sx = {},
  hidden = false,
  as,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}) => {
  // TODO: use warning utility function when it is merged https://github.com/primer/react/pull/2901/
  if (process.env.NODE_ENV !== "production") {
    if (as === 'nav' && !ariaLabel && !ariaLabelledBy) {
      // eslint-disable-next-line no-console
      console.warn('Use `aria-label` or `aria-labelledby` prop to provide an accessible label to the `nav` landmark for assistive technology');
    }
  }
  return /*#__PURE__*/React__default.createElement(Box, {
    as: as
    // Render `aria-label` and `aria-labelledby` only on `nav` elements
    ,
    "aria-label": as === 'nav' ? ariaLabel : undefined,
    "aria-labelledby": as === 'nav' ? ariaLabelledBy : undefined,
    sx: merge({
      display: 'flex',
      order: REGION_ORDER.Navigation,
      ...getBreakpointDeclarations(hidden, 'display', value => {
        return value ? 'none' : 'block';
      })
    }, sx)
  }, children);
};
Navigation.displayName = "Navigation";
const PageHeader = Object.assign(Root, {
  ContextArea,
  ParentLink,
  ContextBar,
  ContextAreaActions,
  TitleArea,
  LeadingAction,
  LeadingVisual,
  Title,
  TrailingVisual,
  TrailingAction,
  Actions,
  Description,
  Navigation
});

export { PageHeader };
