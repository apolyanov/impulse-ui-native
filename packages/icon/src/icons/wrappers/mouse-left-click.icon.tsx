import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseLeftClickBoldIcon } from "../bold";
import { MouseLeftClickDuotoneIcon } from "../duotone";
import { MouseLeftClickFillIcon } from "../fill";
import { MouseLeftClickLightIcon } from "../light";
import { MouseLeftClickRegularIcon } from "../regular";
import { MouseLeftClickThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseLeftClickIcon = memo(function MouseLeftClick(
  props: IconWrapperProps
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
