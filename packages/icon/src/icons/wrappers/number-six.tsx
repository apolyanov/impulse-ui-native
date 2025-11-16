import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSixBold } from "../bold";
import { NumberSixDuotone } from "../duotone";
import { NumberSixFill } from "../fill";
import { NumberSixLight } from "../light";
import { NumberSixRegular } from "../regular";
import { NumberSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSix = memo(function NumberSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSixBold,
      duotone: NumberSixDuotone,
      fill: NumberSixFill,
      light: NumberSixLight,
      regular: NumberSixRegular,
      thin: NumberSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
