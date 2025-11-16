import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MedalMilitaryBold } from "../bold";
import { MedalMilitaryDuotone } from "../duotone";
import { MedalMilitaryFill } from "../fill";
import { MedalMilitaryLight } from "../light";
import { MedalMilitaryRegular } from "../regular";
import { MedalMilitaryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MedalMilitary = memo(function MedalMilitary(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MedalMilitaryBold,
      duotone: MedalMilitaryDuotone,
      fill: MedalMilitaryFill,
      light: MedalMilitaryLight,
      regular: MedalMilitaryRegular,
      thin: MedalMilitaryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
