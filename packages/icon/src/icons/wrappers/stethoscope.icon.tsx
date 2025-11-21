import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StethoscopeBoldIcon } from "../bold";
import { StethoscopeDuotoneIcon } from "../duotone";
import { StethoscopeFillIcon } from "../fill";
import { StethoscopeLightIcon } from "../light";
import { StethoscopeRegularIcon } from "../regular";
import { StethoscopeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StethoscopeIcon = memo(function Stethoscope(
  props: IconWrapperProps
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
