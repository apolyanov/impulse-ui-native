import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CellSignalNoneBold } from "../bold";
import { CellSignalNoneDuotone } from "../duotone";
import { CellSignalNoneFill } from "../fill";
import { CellSignalNoneLight } from "../light";
import { CellSignalNoneRegular } from "../regular";
import { CellSignalNoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CellSignalNone = memo(function CellSignalNone(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CellSignalNoneBold,
      duotone: CellSignalNoneDuotone,
      fill: CellSignalNoneFill,
      light: CellSignalNoneLight,
      regular: CellSignalNoneRegular,
      thin: CellSignalNoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
