import { useMemo } from "react";

import type { ComponentTone, FieldVariant } from "@impulse-ui-native/theme";
import { DatePicker } from "@impulse-ui-native/datetime";
import { Input } from "@impulse-ui-native/input";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { MultiSelect } from "@impulse-ui-native/select";

export function FieldAppearancesRecipe({
  variant = "outlined",
  tone = "neutral",
  disabled = false,
  error,
}: {
  variant?: FieldVariant;
  tone?: ComponentTone;
  disabled?: boolean;
  error?: string;
}) {
  const options = useMemo(
    () => [
      { label: "Design", value: "design" },
      { label: "Engineering", value: "engineering" },
    ],
    [],
  );
  return (
    <View gap={16}>
      <Typography.Title5>
        {variant} / {tone}
      </Typography.Title5>
      <Input
        label="Project name"
        defaultValue="Mobile workspace"
        variant={variant}
        tone={tone}
        disabled={disabled}
        error={error}
      />
      <MultiSelect
        label="Teams"
        options={options}
        defaultValue={["design"]}
        variant={variant}
        tone={tone}
        disabled={disabled}
        error={error}
      />
      <DatePicker
        label="Launch date"
        placeholder="Choose a date"
        variant={variant}
        tone={tone}
        disabled={disabled}
        error={error}
      />
      <Button variant={variant} tone={tone} disabled={disabled}>
        Save changes
      </Button>
    </View>
  );
}
