import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeltBoldIcon } from "../bold";
import { BeltDuotoneIcon } from "../duotone";
import { BeltFillIcon } from "../fill";
import { BeltLightIcon } from "../light";
import { BeltRegularIcon } from "../regular";
import { BeltThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
