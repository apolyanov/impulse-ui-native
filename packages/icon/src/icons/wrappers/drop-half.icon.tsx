import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DropHalfBoldIcon } from "../bold/drop-half-bold.icon";
import { DropHalfDuotoneIcon } from "../duotone/drop-half-duotone.icon";
import { DropHalfFillIcon } from "../fill/drop-half-fill.icon";
import { DropHalfLightIcon } from "../light/drop-half-light.icon";
import { DropHalfRegularIcon } from "../regular/drop-half-regular.icon";
import { DropHalfThinIcon } from "../thin/drop-half-thin.icon";

export const DropHalfIcon = memo(function DropHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropHalfBoldIcon,
      duotone: DropHalfDuotoneIcon,
      fill: DropHalfFillIcon,
      light: DropHalfLightIcon,
      regular: DropHalfRegularIcon,
      thin: DropHalfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
