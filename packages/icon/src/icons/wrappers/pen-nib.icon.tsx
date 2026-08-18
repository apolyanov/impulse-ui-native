import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PenNibBoldIcon } from "../bold/pen-nib-bold.icon";
import { PenNibDuotoneIcon } from "../duotone/pen-nib-duotone.icon";
import { PenNibFillIcon } from "../fill/pen-nib-fill.icon";
import { PenNibLightIcon } from "../light/pen-nib-light.icon";
import { PenNibRegularIcon } from "../regular/pen-nib-regular.icon";
import { PenNibThinIcon } from "../thin/pen-nib-thin.icon";

export const PenNibIcon = memo(function PenNib(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PenNibBoldIcon,
      duotone: PenNibDuotoneIcon,
      fill: PenNibFillIcon,
      light: PenNibLightIcon,
      regular: PenNibRegularIcon,
      thin: PenNibThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
