import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeartBoldIcon } from "../bold/heart-bold.icon";
import { HeartDuotoneIcon } from "../duotone/heart-duotone.icon";
import { HeartFillIcon } from "../fill/heart-fill.icon";
import { HeartLightIcon } from "../light/heart-light.icon";
import { HeartRegularIcon } from "../regular/heart-regular.icon";
import { HeartThinIcon } from "../thin/heart-thin.icon";

export const HeartIcon = memo(function Heart(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartBoldIcon,
      duotone: HeartDuotoneIcon,
      fill: HeartFillIcon,
      light: HeartLightIcon,
      regular: HeartRegularIcon,
      thin: HeartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
