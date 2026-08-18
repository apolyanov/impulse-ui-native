import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BagSimpleBoldIcon } from "../bold/bag-simple-bold.icon";
import { BagSimpleDuotoneIcon } from "../duotone/bag-simple-duotone.icon";
import { BagSimpleFillIcon } from "../fill/bag-simple-fill.icon";
import { BagSimpleLightIcon } from "../light/bag-simple-light.icon";
import { BagSimpleRegularIcon } from "../regular/bag-simple-regular.icon";
import { BagSimpleThinIcon } from "../thin/bag-simple-thin.icon";

export const BagSimpleIcon = memo(function BagSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BagSimpleBoldIcon,
      duotone: BagSimpleDuotoneIcon,
      fill: BagSimpleFillIcon,
      light: BagSimpleLightIcon,
      regular: BagSimpleRegularIcon,
      thin: BagSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
