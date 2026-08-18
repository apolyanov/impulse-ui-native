import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeadsetBoldIcon } from "../bold/headset-bold.icon";
import { HeadsetDuotoneIcon } from "../duotone/headset-duotone.icon";
import { HeadsetFillIcon } from "../fill/headset-fill.icon";
import { HeadsetLightIcon } from "../light/headset-light.icon";
import { HeadsetRegularIcon } from "../regular/headset-regular.icon";
import { HeadsetThinIcon } from "../thin/headset-thin.icon";

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
