import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScalesBoldIcon } from "../bold/scales-bold.icon";
import { ScalesDuotoneIcon } from "../duotone/scales-duotone.icon";
import { ScalesFillIcon } from "../fill/scales-fill.icon";
import { ScalesLightIcon } from "../light/scales-light.icon";
import { ScalesRegularIcon } from "../regular/scales-regular.icon";
import { ScalesThinIcon } from "../thin/scales-thin.icon";

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
