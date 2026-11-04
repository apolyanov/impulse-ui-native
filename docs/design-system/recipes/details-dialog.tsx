import { useState } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Modal } from "@impulse-ui-native/modal";
import { Portal } from "@impulse-ui-native/portal";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

export function DetailsDialogRecipe() {
  const [open, setOpen] = useState<"dialog" | "sheet" | null>(null);
  const close = () => setOpen(null);
  return (
    <View gap={12}>
      <Button onPress={() => setOpen("dialog")}>Open confirmation</Button>
      <Button variant="outlined" onPress={() => setOpen("sheet")}>
        Open details sheet
      </Button>
      <Portal id="recipe-dialog">
        <Modal
          id="recipe-dialog"
          title="Archive project?"
          open={open === "dialog"}
          onClose={close}
        >
          <Typography.Body>You can restore it later.</Typography.Body>
          <Button onPress={close}>Keep project</Button>
        </Modal>
      </Portal>
      <Portal id="recipe-sheet">
        <Flyout
          id="recipe-sheet"
          title="Project details"
          open={open === "sheet"}
          onClose={close}
        >
          <Flyout.Content>
            <Typography.Body>
              Sheet content is supplied by the application.
            </Typography.Body>
            <Button onPress={close}>Done</Button>
          </Flyout.Content>
        </Flyout>
      </Portal>
    </View>
  );
}
