import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandbagSimpleBold } from "../bold";
import { HandbagSimpleDuotone } from "../duotone";
import { HandbagSimpleFill } from "../fill";
import { HandbagSimpleLight } from "../light";
import { HandbagSimpleRegular } from "../regular";
import { HandbagSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandbagSimple = memo(function HandbagSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandbagSimpleBold,
      duotone: HandbagSimpleDuotone,
      fill: HandbagSimpleFill,
      light: HandbagSimpleLight,
      regular: HandbagSimpleRegular,
      thin: HandbagSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
