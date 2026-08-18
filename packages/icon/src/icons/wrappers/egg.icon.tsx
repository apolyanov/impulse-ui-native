import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EggBoldIcon } from "../bold/egg-bold.icon";
import { EggDuotoneIcon } from "../duotone/egg-duotone.icon";
import { EggFillIcon } from "../fill/egg-fill.icon";
import { EggLightIcon } from "../light/egg-light.icon";
import { EggRegularIcon } from "../regular/egg-regular.icon";
import { EggThinIcon } from "../thin/egg-thin.icon";

export const EggIcon = memo(function Egg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EggBoldIcon,
      duotone: EggDuotoneIcon,
      fill: EggFillIcon,
      light: EggLightIcon,
      regular: EggRegularIcon,
      thin: EggThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
