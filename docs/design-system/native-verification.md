# Native reference verification

On 2026-10-26, 34 native frames were captured and visually inspected on an iPhone 18 Pro simulator running iOS 27.0. The [recipe index](recipe-index.json) records the exact preview parameters, device, scope, review date and SHA-256 for every image. [Recipes](recipes.md) link the images.

All 13 visual recipes were inspected in light and dark themes. Eight additional field comparison frames cover filled/primary and soft/secondary defaults, outlined/neutral errors, and filled/primary disabled states in both themes. Selected MultiSelect tags are visible in the inspected filled fields. No clipping or overlapping content was observed in these settled frames.

These are initial-render references. Dialog, anchored-action and notification screenshots show their initial trigger screens; open modal/sheet/menu/toast content was not successfully captured. Attempts to force initial overlay state did not produce a visible overlay and are excluded from the reference set. Touch interaction, keyboard behavior, gestures, font scaling, Android and the full 6,108-case review matrix remain unverified. Setup and service examples are typechecked rather than assigned fabricated screenshots.

The native startup blocker was a mismatch between the explicit Objective-C scene-delegate name and the module-qualified plist name. A focused Expo config plugin now reconciles that configuration; its checks cover explicit names, standard Swift names, unrelated scenes and idempotence. Verification used an isolated copy of the development client with the corrected scene manifest and a separate Metro port. The original installed app was preserved. Temporary capture fixtures were restored after capture.

The host emitted the existing Reanimated warning about dependencies being intended for web; that warning was hidden only in the temporary screenshot harness. This review does not resolve that warning. The existing light primary/contrast pairing also remains below 4.5:1 for normal text; these references do not represent an accessibility contrast sign-off.

A later [picker hierarchy comparison](picker-comparison.md) successfully captured and inspected 12 actual open datetime-range flyouts in light/dark themes. This adds visual evidence for that fixture; the original dialog, popover and notification recipe interaction gaps above remain.
