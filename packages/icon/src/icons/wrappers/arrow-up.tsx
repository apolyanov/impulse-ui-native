import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUpBold } from "../bold";
import { ArrowUpDuotone } from "../duotone";
import { ArrowUpFill } from "../fill";
import { ArrowUpLight } from "../light";
import { ArrowUpRegular } from "../regular";
import { ArrowUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUp = memo(function ArrowUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUpBold,
      duotone: ArrowUpDuotone,
      fill: ArrowUpFill,
      light: ArrowUpLight,
      regular: ArrowUpRegular,
      thin: ArrowUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
