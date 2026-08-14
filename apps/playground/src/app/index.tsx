import { StyleSheet, Text } from "react-native";

import { EmptyIcon } from "@impulse-ui-native/icon";
import { Typography, View } from "@impulse-ui-native/primitives";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Playground baseline is running.</Text>
      <Text>Import one @impulse-ui-native package to test it.</Text>
      <View backgroundColor="red">
        <Typography.Body>TEST</Typography.Body>
      </View>
      <EmptyIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
