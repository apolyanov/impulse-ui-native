import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MedalBoldIcon } from "../bold";
import { MedalDuotoneIcon } from "../duotone";
import { MedalFillIcon } from "../fill";
import { MedalLightIcon } from "../light";
import { MedalRegularIcon } from "../regular";
import { MedalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
