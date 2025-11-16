import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellSimpleZBold } from "../bold";
import { BellSimpleZDuotone } from "../duotone";
import { BellSimpleZFill } from "../fill";
import { BellSimpleZLight } from "../light";
import { BellSimpleZRegular } from "../regular";
import { BellSimpleZThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellSimpleZ = memo(function BellSimpleZ(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleZBold,
      duotone: BellSimpleZDuotone,
      fill: BellSimpleZFill,
      light: BellSimpleZLight,
      regular: BellSimpleZRegular,
      thin: BellSimpleZThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
