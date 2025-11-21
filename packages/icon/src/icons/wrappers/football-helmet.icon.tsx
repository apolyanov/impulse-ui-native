import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FootballHelmetBoldIcon } from "../bold";
import { FootballHelmetDuotoneIcon } from "../duotone";
import { FootballHelmetFillIcon } from "../fill";
import { FootballHelmetLightIcon } from "../light";
import { FootballHelmetRegularIcon } from "../regular";
import { FootballHelmetThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FootballHelmetIcon = memo(function FootballHelmet(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootballHelmetBoldIcon,
      duotone: FootballHelmetDuotoneIcon,
      fill: FootballHelmetFillIcon,
      light: FootballHelmetLightIcon,
      regular: FootballHelmetRegularIcon,
      thin: FootballHelmetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
