import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FootballHelmetBold } from "../bold";
import { FootballHelmetDuotone } from "../duotone";
import { FootballHelmetFill } from "../fill";
import { FootballHelmetLight } from "../light";
import { FootballHelmetRegular } from "../regular";
import { FootballHelmetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FootballHelmet = memo(function FootballHelmet(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootballHelmetBold,
      duotone: FootballHelmetDuotone,
      fill: FootballHelmetFill,
      light: FootballHelmetLight,
      regular: FootballHelmetRegular,
      thin: FootballHelmetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
