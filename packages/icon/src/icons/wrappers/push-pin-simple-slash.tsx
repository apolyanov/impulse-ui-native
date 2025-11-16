import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PushPinSimpleSlashBold } from "../bold";
import { PushPinSimpleSlashDuotone } from "../duotone";
import { PushPinSimpleSlashFill } from "../fill";
import { PushPinSimpleSlashLight } from "../light";
import { PushPinSimpleSlashRegular } from "../regular";
import { PushPinSimpleSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PushPinSimpleSlash = memo(function PushPinSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinSimpleSlashBold,
      duotone: PushPinSimpleSlashDuotone,
      fill: PushPinSimpleSlashFill,
      light: PushPinSimpleSlashLight,
      regular: PushPinSimpleSlashRegular,
      thin: PushPinSimpleSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
