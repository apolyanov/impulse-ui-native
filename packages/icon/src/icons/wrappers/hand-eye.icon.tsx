import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandEyeBoldIcon } from "../bold/hand-eye-bold.icon";
import { HandEyeDuotoneIcon } from "../duotone/hand-eye-duotone.icon";
import { HandEyeFillIcon } from "../fill/hand-eye-fill.icon";
import { HandEyeLightIcon } from "../light/hand-eye-light.icon";
import { HandEyeRegularIcon } from "../regular/hand-eye-regular.icon";
import { HandEyeThinIcon } from "../thin/hand-eye-thin.icon";

export const HandEyeIcon = memo(function HandEye(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandEyeBoldIcon,
      duotone: HandEyeDuotoneIcon,
      fill: HandEyeFillIcon,
      light: HandEyeLightIcon,
      regular: HandEyeRegularIcon,
      thin: HandEyeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
