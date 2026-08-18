import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArmchairBoldIcon } from "../bold/armchair-bold.icon";
import { ArmchairDuotoneIcon } from "../duotone/armchair-duotone.icon";
import { ArmchairFillIcon } from "../fill/armchair-fill.icon";
import { ArmchairLightIcon } from "../light/armchair-light.icon";
import { ArmchairRegularIcon } from "../regular/armchair-regular.icon";
import { ArmchairThinIcon } from "../thin/armchair-thin.icon";

export const ArmchairIcon = memo(function Armchair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArmchairBoldIcon,
      duotone: ArmchairDuotoneIcon,
      fill: ArmchairFillIcon,
      light: ArmchairLightIcon,
      regular: ArmchairRegularIcon,
      thin: ArmchairThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
