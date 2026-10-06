import { memo } from "react";

import { Toast } from "@impulse-ui-native/toast";

export const ToastStoryContent = memo(function ToastStoryContent() {
  return (
    <Toast.Description>
      This message was opened through OverlayStore.
    </Toast.Description>
  );
});
