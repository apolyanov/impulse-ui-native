import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseRightClickBold } from "../bold";
import { MouseRightClickDuotone } from "../duotone";
import { MouseRightClickFill } from "../fill";
import { MouseRightClickLight } from "../light";
import { MouseRightClickRegular } from "../regular";
import { MouseRightClickThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseRightClick = memo(function MouseRightClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseRightClickBold,
      duotone: MouseRightClickDuotone,
      fill: MouseRightClickFill,
      light: MouseRightClickLight,
      regular: MouseRightClickRegular,
      thin: MouseRightClickThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
