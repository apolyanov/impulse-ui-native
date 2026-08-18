import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StairsBoldIcon } from "../bold/stairs-bold.icon";
import { StairsDuotoneIcon } from "../duotone/stairs-duotone.icon";
import { StairsFillIcon } from "../fill/stairs-fill.icon";
import { StairsLightIcon } from "../light/stairs-light.icon";
import { StairsRegularIcon } from "../regular/stairs-regular.icon";
import { StairsThinIcon } from "../thin/stairs-thin.icon";

export const StairsIcon = memo(function Stairs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StairsBoldIcon,
      duotone: StairsDuotoneIcon,
      fill: StairsFillIcon,
      light: StairsLightIcon,
      regular: StairsRegularIcon,
      thin: StairsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
