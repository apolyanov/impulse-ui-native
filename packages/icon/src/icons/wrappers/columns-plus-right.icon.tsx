import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ColumnsPlusRightBoldIcon } from "../bold/columns-plus-right-bold.icon";
import { ColumnsPlusRightDuotoneIcon } from "../duotone/columns-plus-right-duotone.icon";
import { ColumnsPlusRightFillIcon } from "../fill/columns-plus-right-fill.icon";
import { ColumnsPlusRightLightIcon } from "../light/columns-plus-right-light.icon";
import { ColumnsPlusRightRegularIcon } from "../regular/columns-plus-right-regular.icon";
import { ColumnsPlusRightThinIcon } from "../thin/columns-plus-right-thin.icon";

export const ColumnsPlusRightIcon = memo(function ColumnsPlusRight(
  props: IconWrapperProps,
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
