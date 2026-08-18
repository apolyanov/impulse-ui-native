import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EscalatorUpBoldIcon } from "../bold/escalator-up-bold.icon";
import { EscalatorUpDuotoneIcon } from "../duotone/escalator-up-duotone.icon";
import { EscalatorUpFillIcon } from "../fill/escalator-up-fill.icon";
import { EscalatorUpLightIcon } from "../light/escalator-up-light.icon";
import { EscalatorUpRegularIcon } from "../regular/escalator-up-regular.icon";
import { EscalatorUpThinIcon } from "../thin/escalator-up-thin.icon";

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
