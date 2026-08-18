import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MouseLeftClickBoldIcon } from "../bold/mouse-left-click-bold.icon";
import { MouseLeftClickDuotoneIcon } from "../duotone/mouse-left-click-duotone.icon";
import { MouseLeftClickFillIcon } from "../fill/mouse-left-click-fill.icon";
import { MouseLeftClickLightIcon } from "../light/mouse-left-click-light.icon";
import { MouseLeftClickRegularIcon } from "../regular/mouse-left-click-regular.icon";
import { MouseLeftClickThinIcon } from "../thin/mouse-left-click-thin.icon";

export const MouseLeftClickIcon = memo(function MouseLeftClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseLeftClickBoldIcon,
      duotone: MouseLeftClickDuotoneIcon,
      fill: MouseLeftClickFillIcon,
      light: MouseLeftClickLightIcon,
      regular: MouseLeftClickRegularIcon,
      thin: MouseLeftClickThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
