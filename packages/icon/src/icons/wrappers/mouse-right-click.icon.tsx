import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseRightClickBoldIcon } from "../bold";
import { MouseRightClickDuotoneIcon } from "../duotone";
import { MouseRightClickFillIcon } from "../fill";
import { MouseRightClickLightIcon } from "../light";
import { MouseRightClickRegularIcon } from "../regular";
import { MouseRightClickThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseRightClickIcon = memo(function MouseRightClick(
  props: IconWrapperProps
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
