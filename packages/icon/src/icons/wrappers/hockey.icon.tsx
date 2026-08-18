import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HockeyBoldIcon } from "../bold/hockey-bold.icon";
import { HockeyDuotoneIcon } from "../duotone/hockey-duotone.icon";
import { HockeyFillIcon } from "../fill/hockey-fill.icon";
import { HockeyLightIcon } from "../light/hockey-light.icon";
import { HockeyRegularIcon } from "../regular/hockey-regular.icon";
import { HockeyThinIcon } from "../thin/hockey-thin.icon";

export const HockeyIcon = memo(function Hockey(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HockeyBoldIcon,
      duotone: HockeyDuotoneIcon,
      fill: HockeyFillIcon,
      light: HockeyLightIcon,
      regular: HockeyRegularIcon,
      thin: HockeyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
