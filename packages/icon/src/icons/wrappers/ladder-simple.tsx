import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LadderSimpleBold } from "../bold";
import { LadderSimpleDuotone } from "../duotone";
import { LadderSimpleFill } from "../fill";
import { LadderSimpleLight } from "../light";
import { LadderSimpleRegular } from "../regular";
import { LadderSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LadderSimple = memo(function LadderSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LadderSimpleBold,
      duotone: LadderSimpleDuotone,
      fill: LadderSimpleFill,
      light: LadderSimpleLight,
      regular: LadderSimpleRegular,
      thin: LadderSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
