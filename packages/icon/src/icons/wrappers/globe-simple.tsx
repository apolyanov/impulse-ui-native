import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeSimpleBold } from "../bold";
import { GlobeSimpleDuotone } from "../duotone";
import { GlobeSimpleFill } from "../fill";
import { GlobeSimpleLight } from "../light";
import { GlobeSimpleRegular } from "../regular";
import { GlobeSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeSimple = memo(function GlobeSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeSimpleBold,
      duotone: GlobeSimpleDuotone,
      fill: GlobeSimpleFill,
      light: GlobeSimpleLight,
      regular: GlobeSimpleRegular,
      thin: GlobeSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
