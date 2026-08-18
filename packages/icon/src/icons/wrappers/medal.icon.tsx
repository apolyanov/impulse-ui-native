import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MedalBoldIcon } from "../bold/medal-bold.icon";
import { MedalDuotoneIcon } from "../duotone/medal-duotone.icon";
import { MedalFillIcon } from "../fill/medal-fill.icon";
import { MedalLightIcon } from "../light/medal-light.icon";
import { MedalRegularIcon } from "../regular/medal-regular.icon";
import { MedalThinIcon } from "../thin/medal-thin.icon";

export const MedalIcon = memo(function Medal(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MedalBoldIcon,
      duotone: MedalDuotoneIcon,
      fill: MedalFillIcon,
      light: MedalLightIcon,
      regular: MedalRegularIcon,
      thin: MedalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
