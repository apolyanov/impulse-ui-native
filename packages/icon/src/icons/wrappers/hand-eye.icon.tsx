import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandEyeBoldIcon } from "../bold";
import { HandEyeDuotoneIcon } from "../duotone";
import { HandEyeFillIcon } from "../fill";
import { HandEyeLightIcon } from "../light";
import { HandEyeRegularIcon } from "../regular";
import { HandEyeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
