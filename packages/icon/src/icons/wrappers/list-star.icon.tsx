import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListStarBoldIcon } from "../bold";
import { ListStarDuotoneIcon } from "../duotone";
import { ListStarFillIcon } from "../fill";
import { ListStarLightIcon } from "../light";
import { ListStarRegularIcon } from "../regular";
import { ListStarThinIcon } from "../thin";

export const ListStarIcon = memo(function ListStar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListStarBoldIcon,
      duotone: ListStarDuotoneIcon,
      fill: ListStarFillIcon,
      light: ListStarLightIcon,
      regular: ListStarRegularIcon,
      thin: ListStarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
