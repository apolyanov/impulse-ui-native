import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, IconButton } from "@impulse-ui-native/button";
import { Input } from "@impulse-ui-native/input";
import { registerFlyout } from "@impulse-ui-native/layer-manager";
import { FlyoutOpenProps } from "@impulse-ui-native/layer-manager-types";
import { Tag } from "@impulse-ui-native/tag";
import { Typography } from "@impulse-ui-native/typography";
import { View } from "@impulse-ui-native/view";
import { Fragment, memo } from "react";
import { Text } from "react-native";

const TestComponent = memo((props: FlyoutOpenProps) => {
  return (
    <Fragment>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
      <Text>TEST VIEW</Text>
    </Fragment>
  );
});

const test = registerFlyout({
  id: "test",
  Content: TestComponent,
  title(props) {
    return props.title;
  },
});

export default function Index() {
  const openFlyout = (placement: "top" | "bottom") => {
    test.open({
      title: "TEST",
      placement,
    });

    setTimeout(
      () =>
        test.open({
          title: "TEST",
          placement: placement === "top" ? "bottom" : "top",
        }),
      2000
    );
  };

  return (
    <View
      flex={1}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
      gap={8}
    >
      <Input
        prefixIcon={faSearch}
        label="Your username goes here"
        error="There was an error!"
      />
      <Typography.DisplayLarge>
        Edit app/index.tsx to edit this screen.
      </Typography.DisplayLarge>
      <Typography.Body>Edit app/index.tsx to edit this screen.</Typography.Body>
      <Button onPress={() => openFlyout("top")}>TEST</Button>
      <IconButton onPress={() => openFlyout("bottom")} icon={faHouse} />

      <Tag
        onPress={() => {
          console.log("press");
        }}
        variant="filled"
        label="Active"
        onClose={() => {
          console.log("close");
        }}
      />
    </View>
  );
}
