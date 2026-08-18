import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyeBoldIcon } from "../bold/eye-bold.icon";
import { EyeDuotoneIcon } from "../duotone/eye-duotone.icon";
import { EyeFillIcon } from "../fill/eye-fill.icon";
import { EyeLightIcon } from "../light/eye-light.icon";
import { EyeRegularIcon } from "../regular/eye-regular.icon";
import { EyeThinIcon } from "../thin/eye-thin.icon";

export const EyeIcon = memo(function Eye(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeBoldIcon,
      duotone: EyeDuotoneIcon,
      fill: EyeFillIcon,
      light: EyeLightIcon,
      regular: EyeRegularIcon,
      thin: EyeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
