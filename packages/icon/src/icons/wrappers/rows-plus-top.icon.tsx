import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RowsPlusTopBoldIcon } from "../bold/rows-plus-top-bold.icon";
import { RowsPlusTopDuotoneIcon } from "../duotone/rows-plus-top-duotone.icon";
import { RowsPlusTopFillIcon } from "../fill/rows-plus-top-fill.icon";
import { RowsPlusTopLightIcon } from "../light/rows-plus-top-light.icon";
import { RowsPlusTopRegularIcon } from "../regular/rows-plus-top-regular.icon";
import { RowsPlusTopThinIcon } from "../thin/rows-plus-top-thin.icon";

export const RowsPlusTopIcon = memo(function RowsPlusTop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RowsPlusTopBoldIcon,
      duotone: RowsPlusTopDuotoneIcon,
      fill: RowsPlusTopFillIcon,
      light: RowsPlusTopLightIcon,
      regular: RowsPlusTopRegularIcon,
      thin: RowsPlusTopThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
