import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandHeartBoldIcon } from "../bold";
import { HandHeartDuotoneIcon } from "../duotone";
import { HandHeartFillIcon } from "../fill";
import { HandHeartLightIcon } from "../light";
import { HandHeartRegularIcon } from "../regular";
import { HandHeartThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandHeartIcon = memo(function HandHeart(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandHeartBoldIcon,
      duotone: HandHeartDuotoneIcon,
      fill: HandHeartFillIcon,
      light: HandHeartLightIcon,
      regular: HandHeartRegularIcon,
      thin: HandHeartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
