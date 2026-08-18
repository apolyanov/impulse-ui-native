import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListHeartBoldIcon } from "../bold/list-heart-bold.icon";
import { ListHeartDuotoneIcon } from "../duotone/list-heart-duotone.icon";
import { ListHeartFillIcon } from "../fill/list-heart-fill.icon";
import { ListHeartLightIcon } from "../light/list-heart-light.icon";
import { ListHeartRegularIcon } from "../regular/list-heart-regular.icon";
import { ListHeartThinIcon } from "../thin/list-heart-thin.icon";

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
