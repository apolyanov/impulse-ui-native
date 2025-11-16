import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellSimpleBold } from "../bold";
import { BellSimpleDuotone } from "../duotone";
import { BellSimpleFill } from "../fill";
import { BellSimpleLight } from "../light";
import { BellSimpleRegular } from "../regular";
import { BellSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellSimple = memo(function BellSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleBold,
      duotone: BellSimpleDuotone,
      fill: BellSimpleFill,
      light: BellSimpleLight,
      regular: BellSimpleRegular,
      thin: BellSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
