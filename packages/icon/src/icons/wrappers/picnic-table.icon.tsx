import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PicnicTableBoldIcon } from "../bold/picnic-table-bold.icon";
import { PicnicTableDuotoneIcon } from "../duotone/picnic-table-duotone.icon";
import { PicnicTableFillIcon } from "../fill/picnic-table-fill.icon";
import { PicnicTableLightIcon } from "../light/picnic-table-light.icon";
import { PicnicTableRegularIcon } from "../regular/picnic-table-regular.icon";
import { PicnicTableThinIcon } from "../thin/picnic-table-thin.icon";

export const PicnicTableIcon = memo(function PicnicTable(
  props: IconWrapperProps,
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
