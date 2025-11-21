import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CricketBoldIcon } from "../bold";
import { CricketDuotoneIcon } from "../duotone";
import { CricketFillIcon } from "../fill";
import { CricketLightIcon } from "../light";
import { CricketRegularIcon } from "../regular";
import { CricketThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
