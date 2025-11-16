import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceSixBold } from "../bold";
import { DiceSixDuotone } from "../duotone";
import { DiceSixFill } from "../fill";
import { DiceSixLight } from "../light";
import { DiceSixRegular } from "../regular";
import { DiceSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceSix = memo(function DiceSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceSixBold,
      duotone: DiceSixDuotone,
      fill: DiceSixFill,
      light: DiceSixLight,
      regular: DiceSixRegular,
      thin: DiceSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
