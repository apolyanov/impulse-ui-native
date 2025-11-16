import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandHeartBold } from "../bold";
import { HandHeartDuotone } from "../duotone";
import { HandHeartFill } from "../fill";
import { HandHeartLight } from "../light";
import { HandHeartRegular } from "../regular";
import { HandHeartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandHeart = memo(function HandHeart(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandHeartBold,
      duotone: HandHeartDuotone,
      fill: HandHeartFill,
      light: HandHeartLight,
      regular: HandHeartRegular,
      thin: HandHeartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
