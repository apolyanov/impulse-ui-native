import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MouseScrollBoldIcon } from "../bold/mouse-scroll-bold.icon";
import { MouseScrollDuotoneIcon } from "../duotone/mouse-scroll-duotone.icon";
import { MouseScrollFillIcon } from "../fill/mouse-scroll-fill.icon";
import { MouseScrollLightIcon } from "../light/mouse-scroll-light.icon";
import { MouseScrollRegularIcon } from "../regular/mouse-scroll-regular.icon";
import { MouseScrollThinIcon } from "../thin/mouse-scroll-thin.icon";

export const MouseScrollIcon = memo(function MouseScroll(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseScrollBoldIcon,
      duotone: MouseScrollDuotoneIcon,
      fill: MouseScrollFillIcon,
      light: MouseScrollLightIcon,
      regular: MouseScrollRegularIcon,
      thin: MouseScrollThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
