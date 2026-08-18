import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyeClosedBoldIcon } from "../bold/eye-closed-bold.icon";
import { EyeClosedDuotoneIcon } from "../duotone/eye-closed-duotone.icon";
import { EyeClosedFillIcon } from "../fill/eye-closed-fill.icon";
import { EyeClosedLightIcon } from "../light/eye-closed-light.icon";
import { EyeClosedRegularIcon } from "../regular/eye-closed-regular.icon";
import { EyeClosedThinIcon } from "../thin/eye-closed-thin.icon";

export const EyeClosedIcon = memo(function EyeClosed(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeClosedBoldIcon,
      duotone: EyeClosedDuotoneIcon,
      fill: EyeClosedFillIcon,
      light: EyeClosedLightIcon,
      regular: EyeClosedRegularIcon,
      thin: EyeClosedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
