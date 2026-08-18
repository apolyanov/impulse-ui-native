import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BagBoldIcon } from "../bold/bag-bold.icon";
import { BagDuotoneIcon } from "../duotone/bag-duotone.icon";
import { BagFillIcon } from "../fill/bag-fill.icon";
import { BagLightIcon } from "../light/bag-light.icon";
import { BagRegularIcon } from "../regular/bag-regular.icon";
import { BagThinIcon } from "../thin/bag-thin.icon";

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
