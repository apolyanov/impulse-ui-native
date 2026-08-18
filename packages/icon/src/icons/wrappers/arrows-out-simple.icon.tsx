import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsOutSimpleBoldIcon } from "../bold/arrows-out-simple-bold.icon";
import { ArrowsOutSimpleDuotoneIcon } from "../duotone/arrows-out-simple-duotone.icon";
import { ArrowsOutSimpleFillIcon } from "../fill/arrows-out-simple-fill.icon";
import { ArrowsOutSimpleLightIcon } from "../light/arrows-out-simple-light.icon";
import { ArrowsOutSimpleRegularIcon } from "../regular/arrows-out-simple-regular.icon";
import { ArrowsOutSimpleThinIcon } from "../thin/arrows-out-simple-thin.icon";

export const ArrowsOutSimpleIcon = memo(function ArrowsOutSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutSimpleBoldIcon,
      duotone: ArrowsOutSimpleDuotoneIcon,
      fill: ArrowsOutSimpleFillIcon,
      light: ArrowsOutSimpleLightIcon,
      regular: ArrowsOutSimpleRegularIcon,
      thin: ArrowsOutSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
