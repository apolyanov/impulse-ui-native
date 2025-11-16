import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HexagonBold } from "../bold";
import { HexagonDuotone } from "../duotone";
import { HexagonFill } from "../fill";
import { HexagonLight } from "../light";
import { HexagonRegular } from "../regular";
import { HexagonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hexagon = memo(function Hexagon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HexagonBold,
      duotone: HexagonDuotone,
      fill: HexagonFill,
      light: HexagonLight,
      regular: HexagonRegular,
      thin: HexagonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
