import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowArcLeftBold } from "../bold";
import { ArrowArcLeftDuotone } from "../duotone";
import { ArrowArcLeftFill } from "../fill";
import { ArrowArcLeftLight } from "../light";
import { ArrowArcLeftRegular } from "../regular";
import { ArrowArcLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowArcLeft = memo(function ArrowArcLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowArcLeftBold,
      duotone: ArrowArcLeftDuotone,
      fill: ArrowArcLeftFill,
      light: ArrowArcLeftLight,
      regular: ArrowArcLeftRegular,
      thin: ArrowArcLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
