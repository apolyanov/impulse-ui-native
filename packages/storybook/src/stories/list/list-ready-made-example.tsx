import { memo, useMemo, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";
import { List } from "@impulse-ui-native/list";
import { Typography } from "@impulse-ui-native/primitives";

export const ListReadyMadeExample = memo(function ListReadyMadeExample() {
  const [selected, setSelected] = useState(false);

  const handlePress = useEventCallback(() => setSelected((value) => !value));
  const items = useMemo(
    () => [
      {
        id: "account",
        title: "Account",
        description: "Personal details and preferences",
        leading: <Typography.Title6>AB</Typography.Title6>,
      },
      {
        id: "work",
        title: "Work",
        description: "Press to toggle application-owned selection",
        trailing: (
          <Typography.Body>{selected ? "Selected" : "Select"}</Typography.Body>
        ),
        onPress: handlePress,
      },
      {
        id: "archive",
        title: "Archived workspace",
        description: "This action is unavailable",
        disabled: true,
        onPress: handlePress,
      },
    ],
    [handlePress, selected],
  );

  return <List width="100%" maxWidth={420} items={items} />;
});
