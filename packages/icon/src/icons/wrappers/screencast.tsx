import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScreencastBold } from "../bold";
import { ScreencastDuotone } from "../duotone";
import { ScreencastFill } from "../fill";
import { ScreencastLight } from "../light";
import { ScreencastRegular } from "../regular";
import { ScreencastThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Screencast = memo(function Screencast(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScreencastBold,
      duotone: ScreencastDuotone,
      fill: ScreencastFill,
      light: ScreencastLight,
      regular: ScreencastRegular,
      thin: ScreencastThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
