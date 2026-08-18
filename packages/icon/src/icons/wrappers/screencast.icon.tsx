import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScreencastBoldIcon } from "../bold/screencast-bold.icon";
import { ScreencastDuotoneIcon } from "../duotone/screencast-duotone.icon";
import { ScreencastFillIcon } from "../fill/screencast-fill.icon";
import { ScreencastLightIcon } from "../light/screencast-light.icon";
import { ScreencastRegularIcon } from "../regular/screencast-regular.icon";
import { ScreencastThinIcon } from "../thin/screencast-thin.icon";

export const ScreencastIcon = memo(function Screencast(
  props: IconWrapperProps,
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
