import { useState } from "react";

import { Checkbox } from "@impulse-ui-native/checkbox";
import { FormField } from "@impulse-ui-native/form-field";
import { Input, Textarea } from "@impulse-ui-native/input";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { Radio } from "@impulse-ui-native/radio";
import { Switch } from "@impulse-ui-native/switch";

export function AccountFormRecipe() {
  const [name, setName] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [plan, setPlan] = useState("personal");
  const [saved, setSaved] = useState(false);
  const nameError = saved && !name.trim() ? "Enter your name." : undefined;

  return (
    <View gap={16}>
      <Typography.Title4>Account details</Typography.Title4>
      <Input
        label="Name"
        value={name}
        onChangeText={setName}
        error={nameError}
      />
      <Textarea
        label="About you"
        placeholder="A short introduction"
        maxLength={160}
      />
      <FormField
        label="Notifications"
        description="Receive updates about your account."
      >
        {({ controlProps }) => (
          <Switch
            {...controlProps}
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        )}
      </FormField>
      <View flexDirection="row" gap={8} alignItems="center">
        <Checkbox defaultChecked />
        <Typography.Body>Keep me signed in</Typography.Body>
      </View>
      <View flexDirection="row" gap={8} alignItems="center">
        <Radio
          checked={plan === "personal"}
          onCheckedChange={() => setPlan("personal")}
        />
        <Typography.Body>Personal</Typography.Body>
        <Radio
          checked={plan === "team"}
          onCheckedChange={() => setPlan("team")}
        />
        <Typography.Body>Team</Typography.Body>
      </View>
      <Button onPress={() => setSaved(true)}>Save account</Button>
    </View>
  );
}
