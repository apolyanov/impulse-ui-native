import { Text, View } from "react-native";
import { Typography } from "@impulse-ui-native/typography";
import { ThemeProvider } from "@impulse-ui-native/theme";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider>
        <Typography.DisplayLarge
          style={{ fontSize: 56, lineHeight: 64, fontWeight: 700 }}
        >
          Edit app/index.tsx to edit this screen.
        </Typography.DisplayLarge>
      </ThemeProvider>
      <Typography.DisplayLarge
        style={{ fontSize: 56, lineHeight: 64, fontWeight: 700 }}
      >
        Edit app/index.tsx to edit this screen.
      </Typography.DisplayLarge>
      <Text style={{ fontSize: 56, lineHeight: 64, fontWeight: 700 }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
