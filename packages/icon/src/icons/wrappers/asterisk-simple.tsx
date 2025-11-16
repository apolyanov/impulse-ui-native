import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AsteriskSimpleBold } from "../bold";
import { AsteriskSimpleDuotone } from "../duotone";
import { AsteriskSimpleFill } from "../fill";
import { AsteriskSimpleLight } from "../light";
import { AsteriskSimpleRegular } from "../regular";
import { AsteriskSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AsteriskSimple = memo(function AsteriskSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsteriskSimpleBold,
      duotone: AsteriskSimpleDuotone,
      fill: AsteriskSimpleFill,
      light: AsteriskSimpleLight,
      regular: AsteriskSimpleRegular,
      thin: AsteriskSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
