import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandArrowUpBold } from "../bold";
import { HandArrowUpDuotone } from "../duotone";
import { HandArrowUpFill } from "../fill";
import { HandArrowUpLight } from "../light";
import { HandArrowUpRegular } from "../regular";
import { HandArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandArrowUp = memo(function HandArrowUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandArrowUpBold,
      duotone: HandArrowUpDuotone,
      fill: HandArrowUpFill,
      light: HandArrowUpLight,
      regular: HandArrowUpRegular,
      thin: HandArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
