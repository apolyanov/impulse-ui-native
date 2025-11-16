import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandTapBold } from "../bold";
import { HandTapDuotone } from "../duotone";
import { HandTapFill } from "../fill";
import { HandTapLight } from "../light";
import { HandTapRegular } from "../regular";
import { HandTapThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandTap = memo(function HandTap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandTapBold,
      duotone: HandTapDuotone,
      fill: HandTapFill,
      light: HandTapLight,
      regular: HandTapRegular,
      thin: HandTapThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
