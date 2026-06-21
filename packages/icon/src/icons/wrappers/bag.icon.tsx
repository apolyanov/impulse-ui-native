import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BagBoldIcon } from "../bold";
import { BagDuotoneIcon } from "../duotone";
import { BagFillIcon } from "../fill";
import { BagLightIcon } from "../light";
import { BagRegularIcon } from "../regular";
import { BagThinIcon } from "../thin";

export const BagIcon = memo(function Bag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BagBoldIcon,
      duotone: BagDuotoneIcon,
      fill: BagFillIcon,
      light: BagLightIcon,
      regular: BagRegularIcon,
      thin: BagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
