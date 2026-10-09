import { memo, useCallback, useEffect, useId, useMemo } from "react";

import { Modal } from "@impulse-ui-native/modal";
import {
  useOverlayContext,
  useOverlayStatus,
} from "@impulse-ui-native/overlay";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

import type { RegisteredModalContentProps } from "./registered-modal-content";
import { RegisteredModalContent } from "./registered-modal-content";

export const RegisteredModalPreview = memo(function RegisteredModalPreview() {
  const id = useId();
  const { store } = useOverlayContext();
  const status = useOverlayStatus(id);

  const modal = useMemo(
    () =>
      store.register<RegisteredModalContentProps>({
        id,
        unique: true,
        Component: Modal,
        Content: RegisteredModalContent,
        title: ({ name }) => `${name}'s project`,
        onClose: (modalId) => store.close(modalId),
      }),
    [id, store],
  );

  const show = useCallback(
    () => modal.open({ name: "Ada", onClose: modal.close }),
    [modal],
  );

  useEffect(() => () => store.remove(id), [id, store]);

  return (
    <View gap={8}>
      <Button onPress={show}>Open registered modal</Button>
      <Typography.Helper>{`Lifecycle: ${status}`}</Typography.Helper>
    </View>
  );
});
