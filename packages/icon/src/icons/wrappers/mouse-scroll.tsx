import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseScrollBold } from "../bold";
import { MouseScrollDuotone } from "../duotone";
import { MouseScrollFill } from "../fill";
import { MouseScrollLight } from "../light";
import { MouseScrollRegular } from "../regular";
import { MouseScrollThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseScroll = memo(function MouseScroll(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseScrollBold,
      duotone: MouseScrollDuotone,
      fill: MouseScrollFill,
      light: MouseScrollLight,
      regular: MouseScrollRegular,
      thin: MouseScrollThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
