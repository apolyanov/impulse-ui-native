import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FireSimpleBold } from "../bold";
import { FireSimpleDuotone } from "../duotone";
import { FireSimpleFill } from "../fill";
import { FireSimpleLight } from "../light";
import { FireSimpleRegular } from "../regular";
import { FireSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FireSimple = memo(function FireSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FireSimpleBold,
      duotone: FireSimpleDuotone,
      fill: FireSimpleFill,
      light: FireSimpleLight,
      regular: FireSimpleRegular,
      thin: FireSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
