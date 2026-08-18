import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ListStarBoldIcon } from "../bold/list-star-bold.icon";
import { ListStarDuotoneIcon } from "../duotone/list-star-duotone.icon";
import { ListStarFillIcon } from "../fill/list-star-fill.icon";
import { ListStarLightIcon } from "../light/list-star-light.icon";
import { ListStarRegularIcon } from "../regular/list-star-regular.icon";
import { ListStarThinIcon } from "../thin/list-star-thin.icon";

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
