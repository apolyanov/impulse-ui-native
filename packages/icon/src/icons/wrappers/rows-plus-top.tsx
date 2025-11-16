import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RowsPlusTopBold } from "../bold";
import { RowsPlusTopDuotone } from "../duotone";
import { RowsPlusTopFill } from "../fill";
import { RowsPlusTopLight } from "../light";
import { RowsPlusTopRegular } from "../regular";
import { RowsPlusTopThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RowsPlusTop = memo(function RowsPlusTop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RowsPlusTopBold,
      duotone: RowsPlusTopDuotone,
      fill: RowsPlusTopFill,
      light: RowsPlusTopLight,
      regular: RowsPlusTopRegular,
      thin: RowsPlusTopThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
