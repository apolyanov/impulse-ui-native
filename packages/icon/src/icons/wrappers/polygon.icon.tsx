import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PolygonBoldIcon } from "../bold/polygon-bold.icon";
import { PolygonDuotoneIcon } from "../duotone/polygon-duotone.icon";
import { PolygonFillIcon } from "../fill/polygon-fill.icon";
import { PolygonLightIcon } from "../light/polygon-light.icon";
import { PolygonRegularIcon } from "../regular/polygon-regular.icon";
import { PolygonThinIcon } from "../thin/polygon-thin.icon";

export const PolygonIcon = memo(function Polygon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PolygonBoldIcon,
      duotone: PolygonDuotoneIcon,
      fill: PolygonFillIcon,
      light: PolygonLightIcon,
      regular: PolygonRegularIcon,
      thin: PolygonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
