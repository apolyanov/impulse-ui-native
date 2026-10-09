import { memo, useCallback, useId, useMemo, useState } from "react";

import type { ComponentSize } from "@impulse-ui-native/theme";
import { Icon } from "@impulse-ui-native/icon";
import { XIcon } from "@impulse-ui-native/icon/icons/x";
import { Modal } from "@impulse-ui-native/modal";
import { Portal } from "@impulse-ui-native/portal";
import { Button, View } from "@impulse-ui-native/primitives";
import { useColors } from "@impulse-ui-native/theme";

interface ModalPreviewProps {
  size?: ComponentSize;
  compound?: boolean;
}

export const ModalPreview = memo(function ModalPreview({
  size = "medium",
  compound,
}: ModalPreviewProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const colors = useColors();

  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const actions = useMemo(
    () => (
      <Button size="small" onPress={close}>
        Done
      </Button>
    ),
    [close],
  );

  return (
    <View>
      <Button onPress={show}>Open modal</Button>
      <Portal id={`${id}-portal`}>
        {compound ? (
          <Modal.Provider id={id} open={open} onClose={close}>
            <Modal.Root size={size}>
              <Modal.Header>
                <Modal.Title>Project details</Modal.Title>
                <Modal.Close marginLeft="auto">
                  <Icon
                    icon={XIcon}
                    size="small"
                    color={colors.text.tertiary}
                  />
                </Modal.Close>
              </Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  Review the project details before continuing.
                </Modal.Description>
              </Modal.Content>
              <Modal.Footer>{actions}</Modal.Footer>
            </Modal.Root>
          </Modal.Provider>
        ) : (
          <Modal
            id={id}
            open={open}
            size={size}
            title="Project details"
            footer={actions}
            onClose={close}
          >
            <Modal.Description>
              Press the X, press outside, use Android back, or select Done to
              close.
            </Modal.Description>
          </Modal>
        )}
      </Portal>
    </View>
  );
});
