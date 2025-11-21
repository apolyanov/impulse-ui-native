import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListHeartBoldIcon } from "../bold";
import { ListHeartDuotoneIcon } from "../duotone";
import { ListHeartFillIcon } from "../fill";
import { ListHeartLightIcon } from "../light";
import { ListHeartRegularIcon } from "../regular";
import { ListHeartThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListHeartIcon = memo(function ListHeart(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListHeartBoldIcon,
      duotone: ListHeartDuotoneIcon,
      fill: ListHeartFillIcon,
      light: ListHeartLightIcon,
      regular: ListHeartRegularIcon,
      thin: ListHeartThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
