import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GogglesBoldIcon } from "../bold";
import { GogglesDuotoneIcon } from "../duotone";
import { GogglesFillIcon } from "../fill";
import { GogglesLightIcon } from "../light";
import { GogglesRegularIcon } from "../regular";
import { GogglesThinIcon } from "../thin";

export const GogglesIcon = memo(function Goggles(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GogglesBoldIcon,
      duotone: GogglesDuotoneIcon,
      fill: GogglesFillIcon,
      light: GogglesLightIcon,
      regular: GogglesRegularIcon,
      thin: GogglesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
