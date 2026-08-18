import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BellSimpleSlashBoldIcon } from "../bold/bell-simple-slash-bold.icon";
import { BellSimpleSlashDuotoneIcon } from "../duotone/bell-simple-slash-duotone.icon";
import { BellSimpleSlashFillIcon } from "../fill/bell-simple-slash-fill.icon";
import { BellSimpleSlashLightIcon } from "../light/bell-simple-slash-light.icon";
import { BellSimpleSlashRegularIcon } from "../regular/bell-simple-slash-regular.icon";
import { BellSimpleSlashThinIcon } from "../thin/bell-simple-slash-thin.icon";

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
