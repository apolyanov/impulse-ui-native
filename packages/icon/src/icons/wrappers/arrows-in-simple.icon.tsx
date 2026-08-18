import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsInSimpleBoldIcon } from "../bold/arrows-in-simple-bold.icon";
import { ArrowsInSimpleDuotoneIcon } from "../duotone/arrows-in-simple-duotone.icon";
import { ArrowsInSimpleFillIcon } from "../fill/arrows-in-simple-fill.icon";
import { ArrowsInSimpleLightIcon } from "../light/arrows-in-simple-light.icon";
import { ArrowsInSimpleRegularIcon } from "../regular/arrows-in-simple-regular.icon";
import { ArrowsInSimpleThinIcon } from "../thin/arrows-in-simple-thin.icon";

export const ArrowsInSimpleIcon = memo(function ArrowsInSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInSimpleBoldIcon,
      duotone: ArrowsInSimpleDuotoneIcon,
      fill: ArrowsInSimpleFillIcon,
      light: ArrowsInSimpleLightIcon,
      regular: ArrowsInSimpleRegularIcon,
      thin: ArrowsInSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
