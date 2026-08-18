import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MicroscopeBoldIcon } from "../bold/microscope-bold.icon";
import { MicroscopeDuotoneIcon } from "../duotone/microscope-duotone.icon";
import { MicroscopeFillIcon } from "../fill/microscope-fill.icon";
import { MicroscopeLightIcon } from "../light/microscope-light.icon";
import { MicroscopeRegularIcon } from "../regular/microscope-regular.icon";
import { MicroscopeThinIcon } from "../thin/microscope-thin.icon";

export const MicroscopeIcon = memo(function Microscope(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MicroscopeBoldIcon,
      duotone: MicroscopeDuotoneIcon,
      fill: MicroscopeFillIcon,
      light: MicroscopeLightIcon,
      regular: MicroscopeRegularIcon,
      thin: MicroscopeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
