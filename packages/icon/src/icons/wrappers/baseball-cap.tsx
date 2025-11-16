import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BaseballCapBold } from "../bold";
import { BaseballCapDuotone } from "../duotone";
import { BaseballCapFill } from "../fill";
import { BaseballCapLight } from "../light";
import { BaseballCapRegular } from "../regular";
import { BaseballCapThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BaseballCap = memo(function BaseballCap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BaseballCapBold,
      duotone: BaseballCapDuotone,
      fill: BaseballCapFill,
      light: BaseballCapLight,
      regular: BaseballCapRegular,
      thin: BaseballCapThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
