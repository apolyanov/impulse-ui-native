import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArmchairBold } from "../bold";
import { ArmchairDuotone } from "../duotone";
import { ArmchairFill } from "../fill";
import { ArmchairLight } from "../light";
import { ArmchairRegular } from "../regular";
import { ArmchairThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Armchair = memo(function Armchair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArmchairBold,
      duotone: ArmchairDuotone,
      fill: ArmchairFill,
      light: ArmchairLight,
      regular: ArmchairRegular,
      thin: ArmchairThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
