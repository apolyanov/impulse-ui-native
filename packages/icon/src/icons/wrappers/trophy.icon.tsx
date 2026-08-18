import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrophyBoldIcon } from "../bold/trophy-bold.icon";
import { TrophyDuotoneIcon } from "../duotone/trophy-duotone.icon";
import { TrophyFillIcon } from "../fill/trophy-fill.icon";
import { TrophyLightIcon } from "../light/trophy-light.icon";
import { TrophyRegularIcon } from "../regular/trophy-regular.icon";
import { TrophyThinIcon } from "../thin/trophy-thin.icon";

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
