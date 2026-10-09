import type { SystemIconName } from "@/lib/icons/system-icon";

export const componentGroups = [
  {
    name: "Foundations",
    icon: "code",
    components: [
      {
        name: "ThemeProvider",
        description:
          "Apply light or dark themes with primitive and component-token overrides.",
        packageName: "@impulse-ui-native/theme",
        sourcePath: "theme/src/providers/theme.provider.tsx",
        tags: ["Theming", "Tokens"],
      },
      {
        name: "View",
        description:
          "Compose native layouts with token-aware spacing, surfaces, borders, and dimensions.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/view.tsx",
        tags: ["Layout", "Tokens"],
      },
      {
        name: "SafeAreaView",
        description:
          "Apply native safe-area edges alongside themed layout and spacing.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/safe-area-view.tsx",
        tags: ["Layout", "Safe area"],
      },
      {
        name: "Typography",
        description:
          "Render text through shared Montserrat presets, weights, and semantic colors.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/typography.tsx",
        tags: ["Text", "Tokens"],
      },
      {
        name: "Pressable",
        description:
          "Build native actions with shared pressed and disabled feedback.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/pressable.tsx",
        tags: ["Interactive", "Foundation"],
      },
      {
        name: "Control",
        description:
          "Compose field labels, addons, values, loaders, and errors from child-only parts.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/controls/control.tsx",
        tags: ["Compound", "Fields"],
      },
      {
        name: "Icon",
        description:
          "Render typed icon glyphs and named wrappers from the separate icon package.",
        packageName: "@impulse-ui-native/icon",
        sourcePath: "icon/src/components/icon.tsx",
        tags: ["Icons", "SVG"],
      },
    ],
  },
  {
    name: "Actions",
    icon: "zap",
    components: [
      {
        name: "Button",
        description:
          "Trigger primary and secondary actions across sizes, variants, and loading states.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/button.tsx",
        tags: ["Interactive", "4 variants"],
      },
      {
        name: "IconButton",
        description:
          "Present compact actions across shared sizes, variants, and loading states.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/icon-button.tsx",
        tags: ["Interactive", "Icon action"],
      },
    ],
  },
  {
    name: "Inputs",
    icon: "type",
    components: [
      {
        name: "Input",
        description:
          "Collect typed text with themed labels, validation, and supporting content.",
        packageName: "@impulse-ui-native/input",
        sourcePath: "input/src/components/input.tsx",
        tags: ["Interactive", "Validated"],
      },
      {
        name: "Textarea",
        description:
          "Collect longer text with character counting and bounded auto-grow behavior.",
        packageName: "@impulse-ui-native/input",
        sourcePath: "input/src/components/textarea.tsx",
        tags: ["Interactive", "Multiline"],
      },
      {
        name: "Checkbox",
        description:
          "Toggle checked, unchecked, and indeterminate states across shared sizes and variants.",
        packageName: "@impulse-ui-native/checkbox",
        sourcePath: "checkbox/src/components/checkbox.tsx",
        tags: ["Interactive", "3 states"],
      },
      {
        name: "Radio",
        description:
          "Present a single-choice control with caller-managed group selection.",
        packageName: "@impulse-ui-native/radio",
        sourcePath: "radio/src/components/radio.tsx",
        tags: ["Interactive", "Selection"],
      },
      {
        name: "Switch",
        description:
          "Toggle settings with animated state changes and disabled or loading behavior.",
        packageName: "@impulse-ui-native/switch",
        sourcePath: "switch/src/components/switch.tsx",
        tags: ["Interactive", "Animated"],
      },
      {
        name: "Select",
        description:
          "Choose one value through a themed control and native flyout.",
        packageName: "@impulse-ui-native/select",
        sourcePath: "select/src/components/select.tsx",
        tags: ["Interactive", "Flyout"],
      },
      {
        name: "MultiSelect",
        description:
          "Choose multiple values with disabled options and a native flyout.",
        packageName: "@impulse-ui-native/select",
        sourcePath: "select/src/components/multi-select.tsx",
        tags: ["Interactive", "Multiple values"],
      },
      {
        name: "Slider",
        description:
          "Select a numeric value with configurable steps, marks, and value bubbles.",
        packageName: "@impulse-ui-native/slider",
        sourcePath: "slider/src/components/slider.tsx",
        tags: ["Interactive", "Numeric"],
      },
      {
        name: "RangeSlider",
        description:
          "Choose lower and upper numeric bounds with two thumbs and configurable spacing.",
        packageName: "@impulse-ui-native/slider",
        sourcePath: "slider/src/components/range-slider.tsx",
        tags: ["Interactive", "Range"],
      },
      {
        name: "SegmentedControl",
        description:
          "Choose one option from a composable group of labeled or icon segments.",
        packageName: "@impulse-ui-native/segmented-control",
        sourcePath: "segmented-control/src/components/segmented-control.ts",
        tags: ["Interactive", "Composable"],
      },
      {
        name: "FormField",
        description:
          "Compose labels, descriptions, required state, and validation around custom controls.",
        packageName: "@impulse-ui-native/form-field",
        sourcePath: "form-field/src/components/form-field.tsx",
        tags: ["Composable", "Validated"],
      },
      {
        name: "DatePicker",
        description:
          "Select a calendar date with clear/apply actions and quick-date choices.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath: "datetime/src/components/date/date-picker.tsx",
        tags: ["Interactive", "Calendar"],
      },
      {
        name: "DateRangePicker",
        description: "Select start and end calendar dates in a native flyout.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath: "datetime/src/components/date/date-range-picker.tsx",
        tags: ["Calendar", "Range"],
      },
      {
        name: "DatetimePicker",
        description: "Select a date together with hours, minutes, and seconds.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath: "datetime/src/components/datetime/datetime-picker.tsx",
        tags: ["Calendar", "Time"],
      },
      {
        name: "DatetimeRangePicker",
        description:
          "Select a start and end date-time with staged apply/cancel actions.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath:
          "datetime/src/components/datetime/datetime-range-picker.tsx",
        tags: ["Time", "Range"],
      },
      {
        name: "TimePicker",
        description:
          "Select hours, minutes, and seconds using native scrolling columns.",
        packageName: "@impulse-ui-native/datetime",
        sourcePath: "datetime/src/components/time/time-picker.tsx",
        tags: ["Interactive", "Time"],
      },
    ],
  },
  {
    name: "Content",
    icon: "box",
    components: [
      {
        name: "Avatar",
        description:
          "Represent people and entities with images, initials, fallbacks, and presence states.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/avatar.tsx",
        tags: ["Identity", "3 variants"],
      },
      {
        name: "Card",
        description:
          "Group media, headers, content, and footers using Card or composable static and pressable parts.",
        packageName: "@impulse-ui-native/card",
        sourcePath: "card/src/components/card.tsx",
        tags: ["Compound", "Composable"],
      },
      {
        name: "List",
        description:
          "Render static or pressable rows with leading and trailing content using List or composable parts.",
        packageName: "@impulse-ui-native/list",
        sourcePath: "list/src/components/list.tsx",
        tags: ["Compound", "Composable"],
      },
      {
        name: "Carousel",
        description:
          "Browse horizontal slides with snapping, optional peeking, controls, and pagination.",
        packageName: "@impulse-ui-native/carousel",
        sourcePath: "carousel/src/components/carousel.tsx",
        tags: ["Interactive", "Gallery"],
      },
      {
        name: "Divider",
        description:
          "Separate content horizontally or vertically with logical insets and semantic colors.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/divider.tsx",
        tags: ["Layout", "Logical insets"],
      },
      {
        name: "Accordion",
        description:
          "Reveal collapsible sections with single or multiple expansion and animated content height.",
        packageName: "@impulse-ui-native/accordion",
        sourcePath: "accordion/src/components/accordion.ts",
        tags: ["Compound", "Animated"],
      },
    ],
  },
  {
    name: "Feedback",
    icon: "bell",
    components: [
      {
        name: "Toast",
        description:
          "Show timed notifications with semantic tones, optional actions, and composable Toast parts.",
        packageName: "@impulse-ui-native/toast",
        sourcePath: "toast/src/components/toast.tsx",
        tags: ["Feedback", "Composable"],
      },
      {
        name: "Tag",
        description:
          "Label status and categories with semantic colors and optional dismissal.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/tag.tsx",
        tags: ["Display", "Closable"],
      },
      {
        name: "Badge",
        description:
          "Display compact semantic states and metadata with optional leading or trailing content.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/badge/root.tsx",
        tags: ["Display", "Semantic"],
      },
      {
        name: "Spinner",
        description:
          "Communicate indeterminate work with token-aware sizes and semantic colors.",
        packageName: "@impulse-ui-native/primitives",
        sourcePath: "primitives/src/components/atoms/spinner.tsx",
        tags: ["Loading", "Indeterminate"],
      },
      {
        name: "Progress",
        description:
          "Show determinate or indeterminate progress with linear and circular variants.",
        packageName: "@impulse-ui-native/progress",
        sourcePath: "progress/src/components/progress.tsx",
        tags: ["Loading", "Animated"],
      },
      {
        name: "Skeleton",
        description:
          "Communicate loading layouts with animated bones, text, and shape presets.",
        packageName: "@impulse-ui-native/skeleton",
        sourcePath: "skeleton/src/components/skeleton.tsx",
        tags: ["Animated", "Loading"],
      },
      {
        name: "DataView",
        description:
          "Coordinate loading, error, empty, and content states with supplied views and actions.",
        packageName: "@impulse-ui-native/data-state",
        sourcePath: "data-state/src/components/data-view.tsx",
        tags: ["Feedback", "Composable"],
      },
    ],
  },
  {
    name: "Navigation",
    icon: "arrow",
    components: [
      {
        name: "Pagination",
        description:
          "Navigate pages with a responsive page window or compact previous and next controls.",
        packageName: "@impulse-ui-native/pagination",
        sourcePath: "pagination/src/components/pagination.tsx",
        tags: ["Interactive", "Responsive"],
      },
      {
        name: "Tabs",
        description:
          "Switch sections with a flat items API, scrollable underline tabs, and only the active panel mounted.",
        packageName: "@impulse-ui-native/tabs",
        sourcePath: "tabs/src/components/tabs.tsx",
        tags: ["Interactive", "Conditional panels"],
      },
      {
        name: "Stepper",
        description:
          "Guide multi-step content with controlled selection and shared next, previous, and goto methods.",
        packageName: "@impulse-ui-native/stepper",
        sourcePath: "stepper/src/components/stepper.tsx",
        tags: ["Interactive", "Workflow"],
      },
    ],
  },
  {
    name: "Overlays",
    icon: "layers",
    components: [
      {
        name: "Modal",
        description:
          "Compose dialogs and confirmation actions with header/footer parts, backdrop dismissal, and Android Back handling.",
        packageName: "@impulse-ui-native/modal",
        sourcePath: "modal/src/components/modal.tsx",
        tags: ["Compound", "Dialog"],
      },
      {
        name: "Popover",
        description:
          "Present compact actions and choices beside a trigger with composable parts and automatic placement.",
        packageName: "@impulse-ui-native/popover",
        sourcePath: "popover/src/components/popover.tsx",
        tags: ["Compound", "Anchored"],
      },
      {
        name: "Tooltip",
        description:
          "Show a brief hint on long-press with an inverse surface and timed dismissal.",
        packageName: "@impulse-ui-native/popover",
        sourcePath: "popover/src/components/tooltip.tsx",
        tags: ["Long-press", "Timed"],
      },
      {
        name: "Flyout",
        description:
          "Present top or bottom sheets with a backdrop, drag handle, safe-area padding, and gesture dismissal.",
        packageName: "@impulse-ui-native/flyout",
        sourcePath: "flyout/src/components/flyout.tsx",
        tags: ["Overlay", "Animated"],
      },
    ],
  },
  {
    name: "Infrastructure",
    icon: "layers",
    components: [
      {
        name: "Portal",
        description:
          "Render content in named hosts with a shared provider and portal store.",
        packageName: "@impulse-ui-native/portal",
        sourcePath: "portal/src/components/portal.tsx",
        tags: ["Composition", "Hosts"],
      },
      {
        name: "OverlayHost",
        description:
          "Coordinate registered overlays and observe their shared lifecycle.",
        packageName: "@impulse-ui-native/overlay",
        sourcePath: "overlay/src/components/overlay-host.tsx",
        tags: ["Overlays", "Lifecycle"],
      },
    ],
  },
  {
    name: "Charts",
    icon: "layers",
    components: [
      {
        name: "LineChart",
        description:
          "Show a continuous trend across numeric, date, or categorical values.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/line-chart/line-chart.tsx",
        tags: ["Skia", "Cartesian"],
      },
      {
        name: "MultiLineChart",
        description:
          "Compare multiple series against the same axes, domain, and grid.",
        packageName: "@impulse-ui-native/charts",
        sourcePath:
          "charts/src/components/multi-line-chart/multi-line-chart.tsx",
        tags: ["Skia", "Multi-series"],
      },
      {
        name: "BarChart",
        description:
          "Compare categorical values, including positive and negative measurements.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/bar-chart/bar-chart.tsx",
        tags: ["Skia", "Cartesian"],
      },
      {
        name: "MultiBarChart",
        description:
          "Compare grouped series across categories with configurable spacing.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/multi-bar-chart/multi-bar-chart.tsx",
        tags: ["Skia", "Grouped"],
      },
      {
        name: "PieChart",
        description:
          "Communicate proportions as a token-colored pie or donut chart.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/pie-chart/pie-chart.tsx",
        tags: ["Skia", "Radial"],
      },
      {
        name: "MultiPieChart",
        description:
          "Display independently normalized data as concentric proportional rings.",
        packageName: "@impulse-ui-native/charts",
        sourcePath: "charts/src/components/multi-pie-chart/multi-pie-chart.tsx",
        tags: ["Skia", "Concentric"],
      },
    ],
  },
] as const satisfies readonly {
  name: string;
  icon: SystemIconName;
  components: readonly {
    name: string;
    description: string;
    packageName: string;
    sourcePath: string;
    tags: readonly string[];
  }[];
}[];
