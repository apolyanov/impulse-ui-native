import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StethoscopeBoldIcon } from "../bold/stethoscope-bold.icon";
import { StethoscopeDuotoneIcon } from "../duotone/stethoscope-duotone.icon";
import { StethoscopeFillIcon } from "../fill/stethoscope-fill.icon";
import { StethoscopeLightIcon } from "../light/stethoscope-light.icon";
import { StethoscopeRegularIcon } from "../regular/stethoscope-regular.icon";
import { StethoscopeThinIcon } from "../thin/stethoscope-thin.icon";

export const StethoscopeIcon = memo(function Stethoscope(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StethoscopeBoldIcon,
      duotone: StethoscopeDuotoneIcon,
      fill: StethoscopeFillIcon,
      light: StethoscopeLightIcon,
      regular: StethoscopeRegularIcon,
      thin: StethoscopeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
