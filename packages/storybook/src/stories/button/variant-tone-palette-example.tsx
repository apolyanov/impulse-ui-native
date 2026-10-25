import { memo } from "react";

import type { ComponentTone, DisplayVariant } from "@impulse-ui-native/theme";
import { Checkbox } from "@impulse-ui-native/checkbox";
import { IconView } from "@impulse-ui-native/icon-view";
import { SparkleIcon } from "@impulse-ui-native/icon/icons/sparkle";
import { Input } from "@impulse-ui-native/input";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Tag,
  View,
} from "@impulse-ui-native/primitives";
import { Radio } from "@impulse-ui-native/radio";
import { SegmentedControl } from "@impulse-ui-native/segmented-control";
import { Slider } from "@impulse-ui-native/slider";
import { Switch } from "@impulse-ui-native/switch";
import { useSpace } from "@impulse-ui-native/theme";

interface VariantTonePaletteExampleProps {
  tone: ComponentTone;
  variant: DisplayVariant;
}

export const VariantTonePaletteExample = memo(
  function VariantTonePaletteExample({
    tone,
    variant,
  }: VariantTonePaletteExampleProps) {
    const space = useSpace();

    return (
      <View gap={space.sm}>
        <View
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          gap={space.xs}
        >
          <Button tone={tone} variant={variant}>
            Button
          </Button>
          <IconButton tone={tone} variant={variant} icon={SparkleIcon} />
          <IconView tone={tone} variant={variant} icon={SparkleIcon} />
          <Badge tone={tone} variant={variant}>
            Badge
          </Badge>
          <Tag tone={tone} variant={variant} label="Tag" />
          <Avatar tone={tone} variant={variant} initials="AV" />
          <Checkbox tone={tone} variant={variant} defaultChecked />
          <Radio tone={tone} variant={variant} defaultChecked />
          <Switch tone={tone} variant={variant} defaultChecked />
        </View>
        <SegmentedControl.Root
          tone={tone}
          variant={variant}
          defaultValue="selected"
        >
          <SegmentedControl.Item value="selected">
            Selected
          </SegmentedControl.Item>
          <SegmentedControl.Item value="other">Other</SegmentedControl.Item>
        </SegmentedControl.Root>
        <Input
          tone={tone}
          variant={variant}
          defaultValue="Field addon palette"
          PrefixIcon={SparkleIcon}
        />
        <Slider
          tone={tone}
          variant={variant}
          defaultValue={60}
          showValueBubble
          showMinMax
        />
      </View>
    );
  },
);
