import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PushPinSlashBoldIcon } from "../bold/push-pin-slash-bold.icon";
import { PushPinSlashDuotoneIcon } from "../duotone/push-pin-slash-duotone.icon";
import { PushPinSlashFillIcon } from "../fill/push-pin-slash-fill.icon";
import { PushPinSlashLightIcon } from "../light/push-pin-slash-light.icon";
import { PushPinSlashRegularIcon } from "../regular/push-pin-slash-regular.icon";
import { PushPinSlashThinIcon } from "../thin/push-pin-slash-thin.icon";

export const PushPinSlashIcon = memo(function PushPinSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinSlashBoldIcon,
      duotone: PushPinSlashDuotoneIcon,
      fill: PushPinSlashFillIcon,
      light: PushPinSlashLightIcon,
      regular: PushPinSlashRegularIcon,
      thin: PushPinSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
