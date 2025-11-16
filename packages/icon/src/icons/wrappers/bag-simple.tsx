import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BagSimpleBold } from "../bold";
import { BagSimpleDuotone } from "../duotone";
import { BagSimpleFill } from "../fill";
import { BagSimpleLight } from "../light";
import { BagSimpleRegular } from "../regular";
import { BagSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BagSimple = memo(function BagSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BagSimpleBold,
      duotone: BagSimpleDuotone,
      fill: BagSimpleFill,
      light: BagSimpleLight,
      regular: BagSimpleRegular,
      thin: BagSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
