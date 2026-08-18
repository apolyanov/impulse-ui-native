import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MouseRightClickBoldIcon } from "../bold/mouse-right-click-bold.icon";
import { MouseRightClickDuotoneIcon } from "../duotone/mouse-right-click-duotone.icon";
import { MouseRightClickFillIcon } from "../fill/mouse-right-click-fill.icon";
import { MouseRightClickLightIcon } from "../light/mouse-right-click-light.icon";
import { MouseRightClickRegularIcon } from "../regular/mouse-right-click-regular.icon";
import { MouseRightClickThinIcon } from "../thin/mouse-right-click-thin.icon";

export const MouseRightClickIcon = memo(function MouseRightClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseRightClickBoldIcon,
      duotone: MouseRightClickDuotoneIcon,
      fill: MouseRightClickFillIcon,
      light: MouseRightClickLightIcon,
      regular: MouseRightClickRegularIcon,
      thin: MouseRightClickThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
