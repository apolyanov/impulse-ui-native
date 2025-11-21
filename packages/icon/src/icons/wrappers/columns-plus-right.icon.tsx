import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ColumnsPlusRightBoldIcon } from "../bold";
import { ColumnsPlusRightDuotoneIcon } from "../duotone";
import { ColumnsPlusRightFillIcon } from "../fill";
import { ColumnsPlusRightLightIcon } from "../light";
import { ColumnsPlusRightRegularIcon } from "../regular";
import { ColumnsPlusRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ColumnsPlusRightIcon = memo(function ColumnsPlusRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ColumnsPlusRightBoldIcon,
      duotone: ColumnsPlusRightDuotoneIcon,
      fill: ColumnsPlusRightFillIcon,
      light: ColumnsPlusRightLightIcon,
      regular: ColumnsPlusRightRegularIcon,
      thin: ColumnsPlusRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
