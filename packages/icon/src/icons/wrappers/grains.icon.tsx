import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GrainsBoldIcon } from "../bold";
import { GrainsDuotoneIcon } from "../duotone";
import { GrainsFillIcon } from "../fill";
import { GrainsLightIcon } from "../light";
import { GrainsRegularIcon } from "../regular";
import { GrainsThinIcon } from "../thin";

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
