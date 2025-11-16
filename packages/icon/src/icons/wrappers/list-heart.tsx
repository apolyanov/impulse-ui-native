import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListHeartBold } from "../bold";
import { ListHeartDuotone } from "../duotone";
import { ListHeartFill } from "../fill";
import { ListHeartLight } from "../light";
import { ListHeartRegular } from "../regular";
import { ListHeartThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListHeart = memo(function ListHeart(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListHeartBold,
      duotone: ListHeartDuotone,
      fill: ListHeartFill,
      light: ListHeartLight,
      regular: ListHeartRegular,
      thin: ListHeartThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
