import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScreencastBoldIcon } from "../bold";
import { ScreencastDuotoneIcon } from "../duotone";
import { ScreencastFillIcon } from "../fill";
import { ScreencastLightIcon } from "../light";
import { ScreencastRegularIcon } from "../regular";
import { ScreencastThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScreencastIcon = memo(function Screencast(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScreencastBoldIcon,
      duotone: ScreencastDuotoneIcon,
      fill: ScreencastFillIcon,
      light: ScreencastLightIcon,
      regular: ScreencastRegularIcon,
      thin: ScreencastThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
