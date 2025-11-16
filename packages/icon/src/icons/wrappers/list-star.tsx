import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ListStarBold } from "../bold";
import { ListStarDuotone } from "../duotone";
import { ListStarFill } from "../fill";
import { ListStarLight } from "../light";
import { ListStarRegular } from "../regular";
import { ListStarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ListStar = memo(function ListStar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ListStarBold,
      duotone: ListStarDuotone,
      fill: ListStarFill,
      light: ListStarLight,
      regular: ListStarRegular,
      thin: ListStarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
