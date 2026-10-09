# Existing Parent.Child patterns

Source review: 2026-10-09. Paths below are relative to the repository root.
This is a pattern map, not a compliance audit of every leaf implementation.
Read the current sources before changing a contract.

## Public families

| Family           | API shape and members                                                                        | Coordination and useful precedent                                                                                                                                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Card             | Callable plus Root, Pressable, Header, Content, Footer, Media                                | Stateless slots. The convenience component arranges supplied media/header/footer around Content. Best small example of a callable API with a separate parts module.                                                                                                          |
| List             | Callable plus Root, Item, Pressable, Leading, Content, Trailing                              | Stateless row composition. The convenience component maps item data through a private ListEntry and also renders children. ListEntry owns default title/description typography and chooses Item or Pressable.                                                                |
| Accordion        | Namespace: Root, Item, Trigger, Indicator, Content                                           | Root controls single/multiple expanded values; Item provides value/open/disabled state to Trigger and Content. Demonstrates two context scopes, explicit indicator children, native layout measurement, and animated content.                                                |
| SegmentedControl | Namespace: Root, Item                                                                        | Root owns controlled/uncontrolled selection, group appearance and disabling, and clip/scroll overflow. Item compares its value, resolves local disabling, and supports supplied text/nodes and an icon prop.                                                                 |
| Modal            | Callable plus Provider, Root, Header, Close, Content, Footer, Title, Description             | Provider owns lifecycle separately from Root's animated surface. Convenience component supplies default title/header/close icon composition. Close owns behavior and accepts content.                                                                                        |
| Popover          | Callable plus Root, Trigger, Content, Header, Footer, Title, Description, Close              | Root is provider-only, owning open state and anchor ref. Content uses Portal and explicitly re-provides context. Convenience component arranges trigger/content/default close icon. Tooltip is a separate export, not a Popover member.                                      |
| Toast            | Callable plus Root, Content, Title, Description, Icon, Action, Close                         | Root coordinates lifecycle, tone, stacking and interaction. Convenience component chooses tone icon, title/description/action and close icon. Close delegates to Action with closeOnPress.                                                                                   |
| Flyout           | Callable plus Root, Header, Title, Content, Handle                                           | Root owns sheet behavior; convenience component places the handle according to placement and assembles header/title/content. Inspect its overlay/gesture lifecycle rather than treating it as a simple selection provider.                                                   |
| Control          | Namespace: Provider, Root, Label, Error, Addon, Container, Input, Placeholder, Value, Loader | Shared field foundation in primitives. Input and other field components assemble these parts. Addon and Error are child-only slots; convenience fields assemble their content explicitly.                                                                                    |
| Skeleton         | Namespace: Container, Bone and component-shaped presets                                      | Groups composable placeholders and ready-made presets for Avatar, Badge, Button, Checkbox, Control, Divider, IconButton, Pagination, Progress, Radio, SegmentedControl, Slider, Switch, Text, Tag, Textarea. No required shared Root context; Bone owns its animated visual. |
| Typography       | Namespace of Master, display/title/subtitle/body and other text presets                      | Factory-produced text presets, not coordinated compound state. A counterexample to imposing Root/Provider on every dotted API.                                                                                                                                               |

`Input` is a convenience component built with `Control`; it does not currently
expose `Input.Root` or `Input.Addon`. `BadgeRoot` and `BadgeAddon` are implementation
names: Badge exports a callable component, not a public dotted family. Do not
infer public membership from filenames alone.

## Source entry points

- Card: `packages/card/src/components/{index.ts,card-parts.ts,card.tsx,root.tsx}`;
  `packages/card/src/types/card.types.ts`.
- List: `packages/list/src/components/{index.ts,list-parts.ts,list.tsx,list-entry.tsx,content.tsx}`.
- Accordion: `packages/accordion/src/components/{accordion.ts,root.tsx,item.tsx,trigger.tsx,indicator.tsx,content.tsx}`;
  `packages/accordion/src/contexts/{accordion.context.ts,accordion-item.context.ts}`;
  `packages/accordion/src/hooks/{use-accordion-context.hook.ts,use-accordion-item-context.hook.ts}`.
- SegmentedControl: `packages/segmented-control/src/components/{segmented-control.ts,root.tsx,item.tsx}`;
  `packages/segmented-control/src/contexts/segmented-control.context.ts`;
  `packages/segmented-control/src/hooks/use-segmented-control-context.hook.ts`;
  `packages/segmented-control/src/types/segmented-control.types.ts`;
  `packages/theme/src/theme/create-segmented-control-tokens.ts`.
- Modal: `packages/modal/src/components/{index.ts,modal.tsx,provider.tsx,root.tsx,close.tsx}`.
- Popover: `packages/popover/src/components/{index.ts,popover.tsx,popover-root.tsx,popover-content.tsx}`.
- Toast: `packages/toast/src/components/{index.ts,toast-parts.ts,toast.tsx,toast-root.tsx,toast-close.tsx}`.
- Flyout: `packages/flyout/src/components/{index.ts,flyout.tsx,root.tsx,header.tsx}`.
- Control: `packages/primitives/src/components/controls/{control.tsx,provider.tsx,addon.tsx,error.tsx}`;
  `packages/primitives/src/contexts/control.context.ts`;
  `packages/primitives/src/hooks/use-control-context.hook.ts`;
  `packages/input/src/components/input.tsx`.
- Skeleton: `packages/skeleton/src/components/{skeleton.tsx,container.tsx,bone.tsx}`.
- Typography: `packages/primitives/src/components/atoms/typography.tsx` and its
  `createPreset` implementation under `packages/primitives/src/hocs`.

Brace groups above abbreviate multiple paths; they are not literal filenames.

## Findings that change authoring decisions

1. **There are two assembly styles.** Accordion, SegmentedControl, Control,
   Skeleton and Typography use object namespaces. Card, List, Toast, Modal,
   Popover and Flyout attach parts with `Object.assign` to a memoized callable
   component. Neither shape requires introducing the other.
2. **A separate parts module avoids barrel cycles.** Card, List and Toast import
   their unaugmented namespace internally; the public barrel attaches it to the
   convenience component. Modal, Popover and Flyout use direct part imports.
3. **Context follows behavior.** Card and List do not need it. Accordion has
   group and item scopes. Modal separates Provider from the surface. Popover
   Root renders only a provider. Do not equate Root with a native View.
4. **Defaults belong in convenience assembly.** Toast's default icons,
   ListEntry's default text, and Input's explicit addon/error children are useful
   precedents. Control.Addon and Control.Error no longer generate content.
   Accordion.Trigger no longer supplies a default chevron: Indicator rotates
   consumer-provided content. SegmentedControl.Item retains its existing Icon
   prop; that convenience contract is separate from these migrated slots.
5. **Presence checks are inconsistent in older convenience components.** Card
   checks null/undefined for slots; some Modal, Popover, Flyout and Toast slots
   use truthiness. New ReactNode slots should preserve supplied falsy content
   using nullish presence checks, without an unrelated migration of old APIs.
6. **Implementation responsibilities are separated.** Control, Accordion and
   SegmentedControl context consumer hooks now live in individual hook files.
   Context and theme-prop types live under types; static Control.Root and
   Modal.Close styles live in constants modules. Do not reintroduce these
   declarations beside components when extending the families.
7. **Selection and scrolling alone already exist.** SegmentedControl has value,
   defaultValue, onValueChange and overflow="scroll". A proposed Tabs family
   should justify additional panel composition/mount ownership rather than
   duplicate that API merely for a different selected appearance.
