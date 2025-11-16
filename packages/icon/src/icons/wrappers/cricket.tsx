import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CricketBold } from "../bold";
import { CricketDuotone } from "../duotone";
import { CricketFill } from "../fill";
import { CricketLight } from "../light";
import { CricketRegular } from "../regular";
import { CricketThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cricket = memo(function Cricket(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CricketBold,
      duotone: CricketDuotone,
      fill: CricketFill,
      light: CricketLight,
      regular: CricketRegular,
      thin: CricketThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
