import { Button } from "@impulse-ui-native/button";
import { registerFlyout } from "@impulse-ui-native/layer-manager";
import { FlyoutOpenProps } from "@impulse-ui-native/layer-manager-types";
import { Typography } from "@impulse-ui-native/typography";
import { View } from "@impulse-ui-native/view";
import { Fragment, memo, useState } from "react";
import { Pressable, Text } from "react-native";

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
  const [open, setOpen] = useState<boolean>(false);
  const [openBottom, setOpenBottom] = useState<boolean>(false);

  const openFlyout = () => {
    test.open({
      title: "TEST",
      placement: "top",
    });
  };

  const openFlyoutBottom = () => {
    setOpenBottom(true);
  };

  return (
    <View
      flex={1}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Typography.DisplayLarge>
        Edit app/index.tsx to edit this screen.
      </Typography.DisplayLarge>
      <Typography.Body>Edit app/index.tsx to edit this screen.</Typography.Body>
      <Pressable onPress={openFlyout}>
        <Typography.BodyLarge>OPEN</Typography.BodyLarge>
      </Pressable>
      <Pressable onPress={openFlyoutBottom}>
        <Typography.BodyLarge>OPEN BOTTOM</Typography.BodyLarge>
      </Pressable>
      <Button size="large">TEST</Button>
    </View>
  );
}
