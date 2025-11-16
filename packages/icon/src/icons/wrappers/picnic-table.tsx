import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PicnicTableBold } from "../bold";
import { PicnicTableDuotone } from "../duotone";
import { PicnicTableFill } from "../fill";
import { PicnicTableLight } from "../light";
import { PicnicTableRegular } from "../regular";
import { PicnicTableThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PicnicTable = memo(function PicnicTable(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PicnicTableBold,
      duotone: PicnicTableDuotone,
      fill: PicnicTableFill,
      light: PicnicTableLight,
      regular: PicnicTableRegular,
      thin: PicnicTableThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
