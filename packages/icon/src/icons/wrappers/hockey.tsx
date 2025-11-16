import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HockeyBold } from "../bold";
import { HockeyDuotone } from "../duotone";
import { HockeyFill } from "../fill";
import { HockeyLight } from "../light";
import { HockeyRegular } from "../regular";
import { HockeyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hockey = memo(function Hockey(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HockeyBold,
      duotone: HockeyDuotone,
      fill: HockeyFill,
      light: HockeyLight,
      regular: HockeyRegular,
      thin: HockeyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
