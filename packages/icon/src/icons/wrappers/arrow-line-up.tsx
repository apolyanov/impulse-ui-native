import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineUpBold } from "../bold";
import { ArrowLineUpDuotone } from "../duotone";
import { ArrowLineUpFill } from "../fill";
import { ArrowLineUpLight } from "../light";
import { ArrowLineUpRegular } from "../regular";
import { ArrowLineUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineUp = memo(function ArrowLineUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpBold,
      duotone: ArrowLineUpDuotone,
      fill: ArrowLineUpFill,
      light: ArrowLineUpLight,
      regular: ArrowLineUpRegular,
      thin: ArrowLineUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
