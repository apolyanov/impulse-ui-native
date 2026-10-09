import { memo, useCallback, useMemo, useState } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

interface FlyoutPreviewProps {
  placement: "top" | "bottom";
  compound?: boolean;
}

export const FlyoutPreview = memo(function FlyoutPreview({
  placement,
  compound,
}: FlyoutPreviewProps) {
  const [open, setOpen] = useState(false);

  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const content = useMemo(
    () => (
      <View gap={12} paddingBottom={16}>
        <Typography.Body>
          Press the overlay or drag the sheet toward the edge to close it.
        </Typography.Body>
        <Button variant="outlined" onPress={close}>
          Close
        </Button>
      </View>
    ),
    [close],
  );

  return (
    <View>
      <Button onPress={show}>{`Open ${placement} flyout`}</Button>
      <Portal
        id={`${placement}-${compound ? "compound" : "ready-made"}-story-flyout-portal`}
      >
        {compound ? (
          <Flyout.Root
            id={`${placement}-compound-story-flyout`}
            placement={placement}
            open={open}
            onClose={close}
          >
            {placement === "bottom" ? (
              <Flyout.Handle placement={placement} />
            ) : null}
            <Flyout.Header>
              <Flyout.Title>Compound flyout</Flyout.Title>
            </Flyout.Header>
            <Flyout.Content>{content}</Flyout.Content>
            {placement === "top" ? (
              <Flyout.Handle placement={placement} />
            ) : null}
          </Flyout.Root>
        ) : (
          <Flyout
            id={`${placement}-story-flyout`}
            title="Storybook flyout"
            placement={placement}
            open={open}
            onClose={close}
          >
            {content}
          </Flyout>
        )}
      </Portal>
    </View>
  );
});
