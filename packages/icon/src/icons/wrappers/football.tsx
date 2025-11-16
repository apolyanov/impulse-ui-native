import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FootballBold } from "../bold";
import { FootballDuotone } from "../duotone";
import { FootballFill } from "../fill";
import { FootballLight } from "../light";
import { FootballRegular } from "../regular";
import { FootballThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Football = memo(function Football(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootballBold,
      duotone: FootballDuotone,
      fill: FootballFill,
      light: FootballLight,
      regular: FootballRegular,
      thin: FootballThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
