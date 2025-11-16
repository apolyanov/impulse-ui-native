import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PolygonBold } from "../bold";
import { PolygonDuotone } from "../duotone";
import { PolygonFill } from "../fill";
import { PolygonLight } from "../light";
import { PolygonRegular } from "../regular";
import { PolygonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Polygon = memo(function Polygon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PolygonBold,
      duotone: PolygonDuotone,
      fill: PolygonFill,
      light: PolygonLight,
      regular: PolygonRegular,
      thin: PolygonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
