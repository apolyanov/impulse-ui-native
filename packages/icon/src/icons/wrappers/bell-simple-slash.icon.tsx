import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellSimpleSlashBoldIcon } from "../bold";
import { BellSimpleSlashDuotoneIcon } from "../duotone";
import { BellSimpleSlashFillIcon } from "../fill";
import { BellSimpleSlashLightIcon } from "../light";
import { BellSimpleSlashRegularIcon } from "../regular";
import { BellSimpleSlashThinIcon } from "../thin";

export const BellSimpleSlashIcon = memo(function BellSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleSlashBoldIcon,
      duotone: BellSimpleSlashDuotoneIcon,
      fill: BellSimpleSlashFillIcon,
      light: BellSimpleSlashLightIcon,
      regular: BellSimpleSlashRegularIcon,
      thin: BellSimpleSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
