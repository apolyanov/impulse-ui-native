import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoxArrowUpBold } from "../bold";
import { BoxArrowUpDuotone } from "../duotone";
import { BoxArrowUpFill } from "../fill";
import { BoxArrowUpLight } from "../light";
import { BoxArrowUpRegular } from "../regular";
import { BoxArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BoxArrowUp = memo(function BoxArrowUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoxArrowUpBold,
      duotone: BoxArrowUpDuotone,
      fill: BoxArrowUpFill,
      light: BoxArrowUpLight,
      regular: BoxArrowUpRegular,
      thin: BoxArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
