import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PushPinSlashBold } from "../bold";
import { PushPinSlashDuotone } from "../duotone";
import { PushPinSlashFill } from "../fill";
import { PushPinSlashLight } from "../light";
import { PushPinSlashRegular } from "../regular";
import { PushPinSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PushPinSlash = memo(function PushPinSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinSlashBold,
      duotone: PushPinSlashDuotone,
      fill: PushPinSlashFill,
      light: PushPinSlashLight,
      regular: PushPinSlashRegular,
      thin: PushPinSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
