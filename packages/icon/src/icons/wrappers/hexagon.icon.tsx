import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HexagonBoldIcon } from "../bold/hexagon-bold.icon";
import { HexagonDuotoneIcon } from "../duotone/hexagon-duotone.icon";
import { HexagonFillIcon } from "../fill/hexagon-fill.icon";
import { HexagonLightIcon } from "../light/hexagon-light.icon";
import { HexagonRegularIcon } from "../regular/hexagon-regular.icon";
import { HexagonThinIcon } from "../thin/hexagon-thin.icon";

export const HexagonIcon = memo(function Hexagon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HexagonBoldIcon,
      duotone: HexagonDuotoneIcon,
      fill: HexagonFillIcon,
      light: HexagonLightIcon,
      regular: HexagonRegularIcon,
      thin: HexagonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
