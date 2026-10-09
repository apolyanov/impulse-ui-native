import { memo } from "react";

import { Modal } from "@impulse-ui-native/modal";
import { Button, View } from "@impulse-ui-native/primitives";

export interface RegisteredModalContentProps {
  name: string;
  onClose: () => void;
}

export const RegisteredModalContent = memo(function RegisteredModalContent({
  name,
  onClose,
}: RegisteredModalContentProps) {
  return (
    <View gap={12}>
      <Modal.Description>
        This modal was opened globally for {name}.
      </Modal.Description>
      <Modal.Footer>
        <Button size="small" onPress={onClose}>
          Done
        </Button>
      </Modal.Footer>
    </View>
  );
});
