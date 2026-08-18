import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MouseSimpleBoldIcon } from "../bold/mouse-simple-bold.icon";
import { MouseSimpleDuotoneIcon } from "../duotone/mouse-simple-duotone.icon";
import { MouseSimpleFillIcon } from "../fill/mouse-simple-fill.icon";
import { MouseSimpleLightIcon } from "../light/mouse-simple-light.icon";
import { MouseSimpleRegularIcon } from "../regular/mouse-simple-regular.icon";
import { MouseSimpleThinIcon } from "../thin/mouse-simple-thin.icon";

export const MouseSimpleIcon = memo(function MouseSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseSimpleBoldIcon,
      duotone: MouseSimpleDuotoneIcon,
      fill: MouseSimpleFillIcon,
      light: MouseSimpleLightIcon,
      regular: MouseSimpleRegularIcon,
      thin: MouseSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
