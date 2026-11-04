# @impulse-ui-native/theme: capability guide

Configure shared visual tokens and light/dark schemes.

## Setup

- ThemeProvider wraps themed components. Native host must load the configured fonts; default body family is Montserrat.

## Capabilities

- ThemeProvider, theme/token hooks, primitive/component factories and style props.
- Theme overrides including token maps; explicit scheme and code font.

## Boundaries and composition

- Application chooses scheme; do not assume automatic system following.
- Overrides are not a component variant. Use semantic roles; preserve validation/disabled/data colors.

Exact contracts: [API reference](../api/theme.md). Machine facts: [package JSON](theme.json) or [full catalog](../capabilities.json).

## Recipes

- [app-shell](../recipes.md#app-shell)
- [field-appearances](../recipes.md#field-appearances)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### ThemeProvider

Source: `packages/theme/src/providers/theme.provider.tsx:28`. Direct defaults: `scheme="light"`.

| Prop         | Required | Type / choices                                                                                                   |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `children`   | No       | `ReactNode`                                                                                                      |
| `components` | No       | `DeepPartial<ComponentsTokens> \| ((theme: PrimitiveThemeTokens) => DeepPartial<ComponentsTokens>) \| undefined` |
| `scheme`     | No       | `dark / light`                                                                                                   |
| `theme`      | No       | `DeepPartial<{ light: PrimitiveThemeTokens; dark: PrimitiveThemeTokens; }> \| undefined`                         |

Style props: none detected. Additional inherited native props: 0. See exact API types for these inherited contracts.

## Public exports

- `AccordionTokens` (type)
- `AccordionTriggerAppearanceTokens` (type)
- `ActionAppearanceTokens` (type)
- `ActionState` (type)
- `ActionVariant` (type)
- `ActionVisualState` (type)
- `AppTheme` (type)
- `AvailabilityState` (type)
- `AvailabilityVisualState` (type)
- `AvatarSizeTokens` (type)
- `AvatarStatus` (type)
- `AvatarTokens` (type)
- `AvatarVariantTokens` (type)
- `BadgeColorTokens` (type)
- `BadgeSizeTokens` (type)
- `BadgeTokens` (type)
- `BadgeTone` (type)
- `BadgeVariantTokens` (type)
- `BorderProps` (type)
- `BorderSize` (type)
- `BorderSizeKey` (type)
- `BorderSizeTokens` (value)
- `ButtonSizeTokens` (type)
- `ButtonTokens` (type)
- `ButtonTone` (type)
- `ButtonVariantTokens` (type)
- `CardSectionTokens` (type)
- `CardTokens` (type)
- `CarouselCounterAppearanceTokens` (type)
- `CarouselIndicatorAppearanceTokens` (type)
- `CarouselTokens` (type)
- `ChartColorPalette` (type)
- `ChartColorTokens` (value)
- `ChartsLabelTokens` (type)
- `ChartsTokens` (type)
- `CheckboxAppearanceTokens` (type)
- `CheckboxSizeTokens` (type)
- `CheckboxTokens` (type)
- `CheckboxVariantTokens` (type)
- `CodeFontFamilyToken` (value)
- `ColorPair` (type)
- `ColorPickerPreset` (type)
- `ColorPickerTokens` (type)
- `ColorProps` (type)
- `ColorScheme` (type)
- `ComponentSize` (type)
- `ComponentsThemes` (type)
- `ComponentsTokens` (type)
- `ComponentTone` (type)
- `ComponentVariant` (type)
- `ControlAddonAppearanceTokens` (type)
- `ControlAddonTokens` (type)
- `ControlAddonVariantTokens` (type)
- `ControlContainerAppearanceTokens` (type)
- `ControlContainerSizeTokens` (type)
- `ControlContainerTokens` (type)
- `ControlContainerVariantTokens` (type)
- `ControlErrorTokens` (type)
- `ControlInputAppearanceTokens` (type)
- `ControlInputSizeTokens` (type)
- `ControlInputTokens` (type)
- `ControlInputVariantTokens` (type)
- `ControlLabelAppearanceTokens` (type)
- `ControlLabelTokens` (type)
- `ControlState` (type)
- `ControlVisualState` (type)
- `createCarouselTokens` (value)
  - `(tokens: PrimitiveThemeTokens): CarouselTokens`
- `createChartsLabelTokens` (value)
  - `(tokens: PrimitiveThemeTokens): ChartsLabelTokens`
- `createChartsTokens` (value)
  - `(tokens: PrimitiveThemeTokens): ChartsTokens`
- `createColorPickerTokens` (value)
  - `(tokens: PrimitiveThemeTokens): ColorPickerTokens`
- `createComponentsTokens` (value)
  - `(tokens: PrimitiveThemeTokens): ComponentsTokens`
- `createModalTokens` (value)
  - `(tokens: PrimitiveThemeTokens): ModalTokens`
- `createPaginationTokens` (value)
  - `(tokens: PrimitiveThemeTokens): PaginationTokens`
- `createPopoverTokens` (value)
  - `(tokens: PrimitiveThemeTokens): PopoverTokens`
- `createSegmentedControlTokens` (value)
  - `(tokens: PrimitiveThemeTokens): SegmentedControlTokens`
- `createSliderTokens` (value)
  - `(tokens: PrimitiveThemeTokens): SliderTokens`
- `createStyleKey` (value)
  - `<Props extends object>(props: Props): string`
- `createTabsTokens` (value)
  - `(tokens: PrimitiveThemeTokens): TabsTokens`
- `createToastTokens` (value)
  - `(tokens: PrimitiveThemeTokens): ToastTokens`
- `DarkColors` (value)
- `DarkTheme` (value)
- `DataStateActionsFooterTokens` (type)
- `DataStateContentTokens` (type)
- `DataStateDetailsTokens` (type)
- `DataStateLoadingTokens` (type)
- `DataStateTokens` (type)
- `DatePickerFlyoutTokens` (type)
- `DatetimePickerCalendarTokens` (type)
- `DatetimePickerDayAppearanceTokens` (type)
- `DatetimePickerDayState` (type)
- `DatetimePickerDayTokens` (type)
- `DatetimePickerDayVisualState` (type)
- `DatetimePickerFlyoutActionsTokens` (type)
- `DatetimePickerFlyoutTokens` (type)
- `DatetimePickerQuickDateOptionsTokens` (type)
- `DatetimePickerTokens` (type)
- `DatetimePickerVisibleDateSelectTokens` (type)
- `DatetimeRangePickerFlyoutTokens` (type)
- `DimensionProps` (type)
- `DisplayVariant` (type)
- `DividerLayoutTokens` (type)
- `DividerTokenInset` (type)
- `DividerTokenOrientation` (type)
- `DividerTokens` (type)
- `DividerTokenState` (type)
- `DividerTone` (type)
- `ExtendedThemeColors` (type)
- `extractStyleProps` (value)
  - `<Props extends object>(props: Props): StyleProps`
- `FeedbackTone` (type)
- `FieldState` (type)
- `FieldTone` (type)
- `FieldVariant` (type)
- `FieldVisualState` (type)
- `FlexProps` (type)
- `FlyoutHandleTokens` (type)
- `FlyoutPlacement` (type)
- `FlyoutPlacementTokens` (type)
- `FlyoutSpringTokens` (type)
- `FlyoutTitleTokens` (type)
- `FlyoutTokens` (type)
- `FlyoutTokenState` (type)
- `FontFamily` (type)
- `FontFamilyTokens` (value)
- `FontFamilyWeightsItalicTokens` (value)
- `FontFamilyWeightsNormalTokens` (value)
- `FontSize` (type)
- `FontSizeTokens` (value)
- `FontWeight` (type)
- `FontWeightItalic` (type)
- `FontWeightKeys` (type)
- `FontWeightNormal` (type)
- `FontWeightTokens` (value)
- `FontWeightValue` (type)
- `getActionStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<ActionVisualState, Tokens>, state: ActionState): Tokens`
- `getAvailabilityStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<AvailabilityVisualState, Tokens>, state: AvailabilityState): Tokens`
- `getControlStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<ControlVisualState, Tokens>, state: ControlState): Tokens`
- `getDatetimePickerDayStateTokens` (value)
  - `(tokens: DatetimePickerDayTokens["colors"][ComponentTone], state: DatetimePickerDayState): DatetimePickerDayAppearanceTokens`
- `getDividerTokens` (value)
  - `(tokens: DividerTokens, state: DividerTokenState): ResolvedDividerTokens`
- `getFieldStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<FieldVisualState, Tokens>, state: FieldState): Tokens`
- `getFlyoutTokens` (value)
  - `(tokens: FlyoutTokens, state: FlyoutTokenState): ResolvedFlyoutTokens`
- `getPaginationStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<PaginationVisualState, Tokens>, state: PaginationState): Tokens`
- `getSegmentedControlItemTokens` (value)
  - `(tokens: SegmentedControlTokens, state: SegmentedControlItemTokenState): ResolvedSegmentedControlItemTokens`
- `getSelectionItemStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<SelectionItemVisualState, Tokens>, state: SelectionItemState): Tokens`
- `getSelectionStateTokens` (value)
  - `<Tokens>(tokens: VisualStateTokens<SelectionVisualState, Tokens>, state: SelectionState): Tokens`
- `getShadowStyle` (value)
  - `(level: ShadowLevel \| undefined, position: ShadowPosition \| undefined, colors: ThemeColors, shadows?: ShadowScaleTokens): ViewStyle`
- `getSliderTrackTokens` (value)
  - `(tokens: SliderTokens, state: SliderTrackTokenState): ResolvedSliderTrackTokens`
- `getTabsItemTokens` (value)
  - `(tokens: TabsTokens, state: TabsItemTokenState): ResolvedTabsItemTokens`
- `IconButtonSizeTokens` (type)
- `IconButtonTokens` (type)
- `IconButtonVariantTokens` (type)
- `IconTokens` (type)
- `IconViewTokens` (type)
- `LetterSpacingKey` (type)
- `LetterSpacings` (type)
- `LetterSpacingTokens` (value)
- `LightColors` (value)
- `LightTheme` (value)
- `LineHeight` (type)
- `LineHeightTokens` (value)
- `ListTokens` (type)
- `ModalTokens` (type)
- `NeutralColor` (type)
- `NeutralColorKey` (type)
- `NeutralColorTokens` (value)
- `PaginationAppearanceTokens` (type)
- `PaginationSizeToken` (type)
- `PaginationState` (type)
- `PaginationTokens` (type)
- `PaginationVisualState` (type)
- `PopoverTokens` (type)
- `PressableTokens` (type)
- `PrimitiveThemeTokens` (type)
- `ProgressColorTokens` (type)
- `ProgressSizeTokens` (type)
- `ProgressTokens` (type)
- `ProgressTone` (type)
- `ProgressVariant` (type)
- `Radii` (type)
- `RadiiBlob` (type)
- `RadiiConditional` (type)
- `RadiiDrawn` (type)
- `RadiiTokens` (value)
- `RadioAppearanceTokens` (type)
- `RadioSizeTokens` (type)
- `RadioTokens` (type)
- `RadioVariantTokens` (type)
- `RadiusBlobKey` (type)
- `RadiusConditionalKey` (type)
- `RadiusDrawnKey` (type)
- `RadiusKey` (type)
- `ResolvedDividerTokens` (type)
- `ResolvedFlyoutTokens` (type)
- `ResolvedSegmentedControlItemTokens` (type)
- `ResolvedSliderTrackTokens` (type)
- `ResolvedTabsItemTokens` (type)
- `SegmentedControlAppearanceTokens` (type)
- `SegmentedControlItemLayout` (type)
- `SegmentedControlItemLayoutTokens` (type)
- `SegmentedControlItemTokenState` (type)
- `SegmentedControlSizeToken` (type)
- `SegmentedControlSizeTokens` (type)
- `SegmentedControlTokens` (type)
- `SegmentedControlVariantTokens` (type)
- `SelectionItemState` (type)
- `SelectionItemVisualState` (type)
- `SelectionState` (type)
- `SelectionVariant` (type)
- `SelectionVisualState` (type)
- `SelectOptionAppearanceTokens` (type)
- `SelectOptionTokens` (type)
- `SelectTokens` (type)
- `ShadowIntensity` (type)
- `ShadowLevel` (type)
- `ShadowPosition` (type)
- `ShadowProps` (type)
- `ShadowScale` (value)
- `ShadowScaleTokens` (type)
- `SkeletonBoneTokens` (type)
- `SkeletonTextTokens` (type)
- `SkeletonTokens` (type)
- `SliderAppearanceTokens` (type)
- `SliderSizeTokens` (type)
- `SliderTokens` (type)
- `SliderTrackLayout` (type)
- `SliderTrackLayoutTokens` (type)
- `SliderTrackTokenState` (type)
- `SliderVariant` (type)
- `SliderVariantTokens` (type)
- `Space` (type)
- `SpaceSizesKey` (type)
- `SpaceTokens` (value)
- `SpacingProps` (type)
- `SpinnerTokens` (type)
- `SpinnerTone` (type)
- `StepperNavigationTokens` (type)
- `StepperTokens` (type)
- `StylePropKey` (type)
- `StyleProps` (type)
- `StylePropsSet` (value)
- `SwitchAppearanceTokens` (type)
- `SwitchSizeTokens` (type)
- `SwitchTokens` (type)
- `SwitchVariantTokens` (type)
- `TabsItemAppearanceTokens` (type)
- `TabsItemTokenState` (type)
- `TabsSizeTokens` (type)
- `TabsTokens` (type)
- `TagAppearanceTokens` (type)
- `TagSizeTokens` (type)
- `TagTokens` (type)
- `TagTone` (type)
- `TagToneTokens` (type)
- `TagVariantTokens` (type)
- `TextareaAppearanceTokens` (type)
- `TextareaSizeTokens` (type)
- `TextareaTokens` (type)
- `ThemeColors` (type)
- `ThemeContextData` (type)
- `ThemeProvider` (value)
  - `(props: ThemeProviderProps & { children?: import("react").ReactNode \| undefined; }): import("react").ReactNode`
- `TimePickerColumnAppearanceTokens` (type)
- `TimePickerColumnsTokens` (type)
- `TimePickerColumnTokens` (type)
- `TimePickerFlyoutTokens` (type)
- `TimePickerTokens` (type)
- `ToastTokens` (type)
- `ToastTone` (type)
- `TypographyKey` (type)
- `TypographyPresetKey` (type)
- `TypographyProps` (type)
- `useBorder` (hook)
  - `(): BorderSize`
- `useColors` (hook)
  - `(): ThemeColors`
- `useComponentsTokens` (hook)
  - `(): import("@impulse-ui-native/toolkit").ComponentsTokens`
- `useRadii` (hook)
  - `(): Radii`
- `useSpace` (hook)
  - `(): Space`
- `useStyleProps` (hook)
  - `<Props extends object>(props: Props): Partial<import("@impulse-ui-native/toolkit").SpacingProps & import("@impulse-ui-native/toolkit").ColorProps & import("@impulse-ui-native/toolkit").ShadowProps & import("@impulse-ui-native/toolkit").BorderProps & import("@impulse-ui-native/toolkit").TypographyProps & import("@impulse-ui-native/toolkit").FlexProps & import("@impulse-ui-native/toolkit").DimensionProps>`
- `useTheme` (hook)
  - `(): AppTheme`
- `useThemeContext` (hook)
  - `(): AppTheme`
- `useThemedStyles` (hook)
  - `<T extends NamedStyles<T>>(styledFunction: StyledFunctionNoProps<T>): ThemedStyles<T>`
  - `<Props extends object, T extends NamedStyles<T>>(styledFunction: StyledFunctionWithProps<Props, T>, props: Props, dependencies: readonly unknown[]): ThemedStyles<T>`
- `VisualStateTokens` (type)
