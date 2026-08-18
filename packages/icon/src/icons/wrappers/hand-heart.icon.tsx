import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandHeartBoldIcon } from "../bold/hand-heart-bold.icon";
import { HandHeartDuotoneIcon } from "../duotone/hand-heart-duotone.icon";
import { HandHeartFillIcon } from "../fill/hand-heart-fill.icon";
import { HandHeartLightIcon } from "../light/hand-heart-light.icon";
import { HandHeartRegularIcon } from "../regular/hand-heart-regular.icon";
import { HandHeartThinIcon } from "../thin/hand-heart-thin.icon";

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
