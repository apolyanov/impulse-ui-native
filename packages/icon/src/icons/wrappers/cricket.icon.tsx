import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CricketBoldIcon } from "../bold/cricket-bold.icon";
import { CricketDuotoneIcon } from "../duotone/cricket-duotone.icon";
import { CricketFillIcon } from "../fill/cricket-fill.icon";
import { CricketLightIcon } from "../light/cricket-light.icon";
import { CricketRegularIcon } from "../regular/cricket-regular.icon";
import { CricketThinIcon } from "../thin/cricket-thin.icon";

export const CricketIcon = memo(function Cricket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CricketBoldIcon,
      duotone: CricketDuotoneIcon,
      fill: CricketFillIcon,
      light: CricketLightIcon,
      regular: CricketRegularIcon,
      thin: CricketThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
