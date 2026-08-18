import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GrainsBoldIcon } from "../bold/grains-bold.icon";
import { GrainsDuotoneIcon } from "../duotone/grains-duotone.icon";
import { GrainsFillIcon } from "../fill/grains-fill.icon";
import { GrainsLightIcon } from "../light/grains-light.icon";
import { GrainsRegularIcon } from "../regular/grains-regular.icon";
import { GrainsThinIcon } from "../thin/grains-thin.icon";

export const GrainsIcon = memo(function Grains(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GrainsBoldIcon,
      duotone: GrainsDuotoneIcon,
      fill: GrainsFillIcon,
      light: GrainsLightIcon,
      regular: GrainsRegularIcon,
      thin: GrainsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
