import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BeltBoldIcon } from "../bold/belt-bold.icon";
import { BeltDuotoneIcon } from "../duotone/belt-duotone.icon";
import { BeltFillIcon } from "../fill/belt-fill.icon";
import { BeltLightIcon } from "../light/belt-light.icon";
import { BeltRegularIcon } from "../regular/belt-regular.icon";
import { BeltThinIcon } from "../thin/belt-thin.icon";

export const BeltIcon = memo(function Belt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeltBoldIcon,
      duotone: BeltDuotoneIcon,
      fill: BeltFillIcon,
      light: BeltLightIcon,
      regular: BeltRegularIcon,
      thin: BeltThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
