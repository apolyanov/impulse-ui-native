import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrophyBoldIcon } from "../bold";
import { TrophyDuotoneIcon } from "../duotone";
import { TrophyFillIcon } from "../fill";
import { TrophyLightIcon } from "../light";
import { TrophyRegularIcon } from "../regular";
import { TrophyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrophyIcon = memo(function Trophy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrophyBoldIcon,
      duotone: TrophyDuotoneIcon,
      fill: TrophyFillIcon,
      light: TrophyLightIcon,
      regular: TrophyRegularIcon,
      thin: TrophyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
