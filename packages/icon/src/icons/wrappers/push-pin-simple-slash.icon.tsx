import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PushPinSimpleSlashBoldIcon } from "../bold/push-pin-simple-slash-bold.icon";
import { PushPinSimpleSlashDuotoneIcon } from "../duotone/push-pin-simple-slash-duotone.icon";
import { PushPinSimpleSlashFillIcon } from "../fill/push-pin-simple-slash-fill.icon";
import { PushPinSimpleSlashLightIcon } from "../light/push-pin-simple-slash-light.icon";
import { PushPinSimpleSlashRegularIcon } from "../regular/push-pin-simple-slash-regular.icon";
import { PushPinSimpleSlashThinIcon } from "../thin/push-pin-simple-slash-thin.icon";

export const PushPinSimpleSlashIcon = memo(function PushPinSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinSimpleSlashBoldIcon,
      duotone: PushPinSimpleSlashDuotoneIcon,
      fill: PushPinSimpleSlashFillIcon,
      light: PushPinSimpleSlashLightIcon,
      regular: PushPinSimpleSlashRegularIcon,
      thin: PushPinSimpleSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
