import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FootballBoldIcon } from "../bold/football-bold.icon";
import { FootballDuotoneIcon } from "../duotone/football-duotone.icon";
import { FootballFillIcon } from "../fill/football-fill.icon";
import { FootballLightIcon } from "../light/football-light.icon";
import { FootballRegularIcon } from "../regular/football-regular.icon";
import { FootballThinIcon } from "../thin/football-thin.icon";

export const FootballIcon = memo(function Football(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootballBoldIcon,
      duotone: FootballDuotoneIcon,
      fill: FootballFillIcon,
      light: FootballLightIcon,
      regular: FootballRegularIcon,
      thin: FootballThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
