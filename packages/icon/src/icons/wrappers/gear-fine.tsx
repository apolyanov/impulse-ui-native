import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GearFineBold } from "../bold";
import { GearFineDuotone } from "../duotone";
import { GearFineFill } from "../fill";
import { GearFineLight } from "../light";
import { GearFineRegular } from "../regular";
import { GearFineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GearFine = memo(function GearFine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GearFineBold,
      duotone: GearFineDuotone,
      fill: GearFineFill,
      light: GearFineLight,
      regular: GearFineRegular,
      thin: GearFineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
