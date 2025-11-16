import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LadderBold } from "../bold";
import { LadderDuotone } from "../duotone";
import { LadderFill } from "../fill";
import { LadderLight } from "../light";
import { LadderRegular } from "../regular";
import { LadderThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ladder = memo(function Ladder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LadderBold,
      duotone: LadderDuotone,
      fill: LadderFill,
      light: LadderLight,
      regular: LadderRegular,
      thin: LadderThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
