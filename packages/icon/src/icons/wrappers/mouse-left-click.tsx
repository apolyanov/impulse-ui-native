import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseLeftClickBold } from "../bold";
import { MouseLeftClickDuotone } from "../duotone";
import { MouseLeftClickFill } from "../fill";
import { MouseLeftClickLight } from "../light";
import { MouseLeftClickRegular } from "../regular";
import { MouseLeftClickThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseLeftClick = memo(function MouseLeftClick(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseLeftClickBold,
      duotone: MouseLeftClickDuotone,
      fill: MouseLeftClickFill,
      light: MouseLeftClickLight,
      regular: MouseLeftClickRegular,
      thin: MouseLeftClickThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
