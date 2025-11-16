import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellZBold } from "../bold";
import { BellZDuotone } from "../duotone";
import { BellZFill } from "../fill";
import { BellZLight } from "../light";
import { BellZRegular } from "../regular";
import { BellZThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellZ = memo(function BellZ(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellZBold,
      duotone: BellZDuotone,
      fill: BellZFill,
      light: BellZLight,
      regular: BellZRegular,
      thin: BellZThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
