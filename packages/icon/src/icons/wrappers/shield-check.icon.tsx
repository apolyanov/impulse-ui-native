import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldCheckBoldIcon } from "../bold/shield-check-bold.icon";
import { ShieldCheckDuotoneIcon } from "../duotone/shield-check-duotone.icon";
import { ShieldCheckFillIcon } from "../fill/shield-check-fill.icon";
import { ShieldCheckLightIcon } from "../light/shield-check-light.icon";
import { ShieldCheckRegularIcon } from "../regular/shield-check-regular.icon";
import { ShieldCheckThinIcon } from "../thin/shield-check-thin.icon";

export const ShieldCheckIcon = memo(function ShieldCheck(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldCheckBoldIcon,
      duotone: ShieldCheckDuotoneIcon,
      fill: ShieldCheckFillIcon,
      light: ShieldCheckLightIcon,
      regular: ShieldCheckRegularIcon,
      thin: ShieldCheckThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
