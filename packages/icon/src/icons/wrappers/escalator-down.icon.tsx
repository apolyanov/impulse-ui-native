import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EscalatorDownBoldIcon } from "../bold/escalator-down-bold.icon";
import { EscalatorDownDuotoneIcon } from "../duotone/escalator-down-duotone.icon";
import { EscalatorDownFillIcon } from "../fill/escalator-down-fill.icon";
import { EscalatorDownLightIcon } from "../light/escalator-down-light.icon";
import { EscalatorDownRegularIcon } from "../regular/escalator-down-regular.icon";
import { EscalatorDownThinIcon } from "../thin/escalator-down-thin.icon";

export const EscalatorDownIcon = memo(function EscalatorDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EscalatorDownBoldIcon,
      duotone: EscalatorDownDuotoneIcon,
      fill: EscalatorDownFillIcon,
      light: EscalatorDownLightIcon,
      regular: EscalatorDownRegularIcon,
      thin: EscalatorDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
