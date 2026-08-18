import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GogglesBoldIcon } from "../bold/goggles-bold.icon";
import { GogglesDuotoneIcon } from "../duotone/goggles-duotone.icon";
import { GogglesFillIcon } from "../fill/goggles-fill.icon";
import { GogglesLightIcon } from "../light/goggles-light.icon";
import { GogglesRegularIcon } from "../regular/goggles-regular.icon";
import { GogglesThinIcon } from "../thin/goggles-thin.icon";

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
