import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MedalMilitaryBoldIcon } from "../bold/medal-military-bold.icon";
import { MedalMilitaryDuotoneIcon } from "../duotone/medal-military-duotone.icon";
import { MedalMilitaryFillIcon } from "../fill/medal-military-fill.icon";
import { MedalMilitaryLightIcon } from "../light/medal-military-light.icon";
import { MedalMilitaryRegularIcon } from "../regular/medal-military-regular.icon";
import { MedalMilitaryThinIcon } from "../thin/medal-military-thin.icon";

export const MedalMilitaryIcon = memo(function MedalMilitary(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MedalMilitaryBoldIcon,
      duotone: MedalMilitaryDuotoneIcon,
      fill: MedalMilitaryFillIcon,
      light: MedalMilitaryLightIcon,
      regular: MedalMilitaryRegularIcon,
      thin: MedalMilitaryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
