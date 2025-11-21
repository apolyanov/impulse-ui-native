import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RowsPlusTopBoldIcon } from "../bold";
import { RowsPlusTopDuotoneIcon } from "../duotone";
import { RowsPlusTopFillIcon } from "../fill";
import { RowsPlusTopLightIcon } from "../light";
import { RowsPlusTopRegularIcon } from "../regular";
import { RowsPlusTopThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RowsPlusTopIcon = memo(function RowsPlusTop(
  props: IconWrapperProps
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
