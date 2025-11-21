import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeadsetBoldIcon } from "../bold";
import { HeadsetDuotoneIcon } from "../duotone";
import { HeadsetFillIcon } from "../fill";
import { HeadsetLightIcon } from "../light";
import { HeadsetRegularIcon } from "../regular";
import { HeadsetThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeadsetIcon = memo(function Headset(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadsetBoldIcon,
      duotone: HeadsetDuotoneIcon,
      fill: HeadsetFillIcon,
      light: HeadsetLightIcon,
      regular: HeadsetRegularIcon,
      thin: HeadsetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
