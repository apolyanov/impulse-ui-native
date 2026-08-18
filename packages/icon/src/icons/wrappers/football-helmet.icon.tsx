import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FootballHelmetBoldIcon } from "../bold/football-helmet-bold.icon";
import { FootballHelmetDuotoneIcon } from "../duotone/football-helmet-duotone.icon";
import { FootballHelmetFillIcon } from "../fill/football-helmet-fill.icon";
import { FootballHelmetLightIcon } from "../light/football-helmet-light.icon";
import { FootballHelmetRegularIcon } from "../regular/football-helmet-regular.icon";
import { FootballHelmetThinIcon } from "../thin/football-helmet-thin.icon";

export const FootballHelmetIcon = memo(function FootballHelmet(
  props: IconWrapperProps,
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
