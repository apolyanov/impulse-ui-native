import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EscalatorUpBoldIcon } from "../bold";
import { EscalatorUpDuotoneIcon } from "../duotone";
import { EscalatorUpFillIcon } from "../fill";
import { EscalatorUpLightIcon } from "../light";
import { EscalatorUpRegularIcon } from "../regular";
import { EscalatorUpThinIcon } from "../thin";

export const EscalatorUpIcon = memo(function EscalatorUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EscalatorUpBoldIcon,
      duotone: EscalatorUpDuotoneIcon,
      fill: EscalatorUpFillIcon,
      light: EscalatorUpLightIcon,
      regular: EscalatorUpRegularIcon,
      thin: EscalatorUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
