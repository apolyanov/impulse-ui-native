import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrownCrossBold } from "../bold";
import { CrownCrossDuotone } from "../duotone";
import { CrownCrossFill } from "../fill";
import { CrownCrossLight } from "../light";
import { CrownCrossRegular } from "../regular";
import { CrownCrossThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CrownCross = memo(function CrownCross(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrownCrossBold,
      duotone: CrownCrossDuotone,
      fill: CrownCrossFill,
      light: CrownCrossLight,
      regular: CrownCrossRegular,
      thin: CrownCrossThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
