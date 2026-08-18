import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EggCrackBoldIcon } from "../bold/egg-crack-bold.icon";
import { EggCrackDuotoneIcon } from "../duotone/egg-crack-duotone.icon";
import { EggCrackFillIcon } from "../fill/egg-crack-fill.icon";
import { EggCrackLightIcon } from "../light/egg-crack-light.icon";
import { EggCrackRegularIcon } from "../regular/egg-crack-regular.icon";
import { EggCrackThinIcon } from "../thin/egg-crack-thin.icon";

export const EggCrackIcon = memo(function EggCrack(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EggCrackBoldIcon,
      duotone: EggCrackDuotoneIcon,
      fill: EggCrackFillIcon,
      light: EggCrackLightIcon,
      regular: EggCrackRegularIcon,
      thin: EggCrackThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
