import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PushPinSlashBoldIcon } from "../bold";
import { PushPinSlashDuotoneIcon } from "../duotone";
import { PushPinSlashFillIcon } from "../fill";
import { PushPinSlashLightIcon } from "../light";
import { PushPinSlashRegularIcon } from "../regular";
import { PushPinSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PushPinSlashIcon = memo(function PushPinSlash(
  props: IconWrapperProps
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
