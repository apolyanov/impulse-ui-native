import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScalesBoldIcon } from "../bold";
import { ScalesDuotoneIcon } from "../duotone";
import { ScalesFillIcon } from "../fill";
import { ScalesLightIcon } from "../light";
import { ScalesRegularIcon } from "../regular";
import { ScalesThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScalesIcon = memo(function Scales(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScalesBoldIcon,
      duotone: ScalesDuotoneIcon,
      fill: ScalesFillIcon,
      light: ScalesLightIcon,
      regular: ScalesRegularIcon,
      thin: ScalesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
