import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LampPendantBoldIcon } from "../bold/lamp-pendant-bold.icon";
import { LampPendantDuotoneIcon } from "../duotone/lamp-pendant-duotone.icon";
import { LampPendantFillIcon } from "../fill/lamp-pendant-fill.icon";
import { LampPendantLightIcon } from "../light/lamp-pendant-light.icon";
import { LampPendantRegularIcon } from "../regular/lamp-pendant-regular.icon";
import { LampPendantThinIcon } from "../thin/lamp-pendant-thin.icon";

export const LampPendantIcon = memo(function LampPendant(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LampPendantBoldIcon,
      duotone: LampPendantDuotoneIcon,
      fill: LampPendantFillIcon,
      light: LampPendantLightIcon,
      regular: LampPendantRegularIcon,
      thin: LampPendantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
