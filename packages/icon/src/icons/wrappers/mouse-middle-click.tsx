import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseMiddleClickBold } from "../bold";
import { MouseMiddleClickDuotone } from "../duotone";
import { MouseMiddleClickFill } from "../fill";
import { MouseMiddleClickLight } from "../light";
import { MouseMiddleClickRegular } from "../regular";
import { MouseMiddleClickThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseMiddleClick = memo(function MouseMiddleClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseMiddleClickBold,
      duotone: MouseMiddleClickDuotone,
      fill: MouseMiddleClickFill,
      light: MouseMiddleClickLight,
      regular: MouseMiddleClickRegular,
      thin: MouseMiddleClickThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
