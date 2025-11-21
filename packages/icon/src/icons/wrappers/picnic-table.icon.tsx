import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PicnicTableBoldIcon } from "../bold";
import { PicnicTableDuotoneIcon } from "../duotone";
import { PicnicTableFillIcon } from "../fill";
import { PicnicTableLightIcon } from "../light";
import { PicnicTableRegularIcon } from "../regular";
import { PicnicTableThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PicnicTableIcon = memo(function PicnicTable(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PicnicTableBoldIcon,
      duotone: PicnicTableDuotoneIcon,
      fill: PicnicTableFillIcon,
      light: PicnicTableLightIcon,
      regular: PicnicTableRegularIcon,
      thin: PicnicTableThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
