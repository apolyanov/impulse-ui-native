import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MouseMiddleClickBoldIcon } from "../bold/mouse-middle-click-bold.icon";
import { MouseMiddleClickDuotoneIcon } from "../duotone/mouse-middle-click-duotone.icon";
import { MouseMiddleClickFillIcon } from "../fill/mouse-middle-click-fill.icon";
import { MouseMiddleClickLightIcon } from "../light/mouse-middle-click-light.icon";
import { MouseMiddleClickRegularIcon } from "../regular/mouse-middle-click-regular.icon";
import { MouseMiddleClickThinIcon } from "../thin/mouse-middle-click-thin.icon";

export const MouseMiddleClickIcon = memo(function MouseMiddleClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseMiddleClickBoldIcon,
      duotone: MouseMiddleClickDuotoneIcon,
      fill: MouseMiddleClickFillIcon,
      light: MouseMiddleClickLightIcon,
      regular: MouseMiddleClickRegularIcon,
      thin: MouseMiddleClickThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
