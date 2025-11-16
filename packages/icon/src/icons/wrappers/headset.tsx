import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeadsetBold } from "../bold";
import { HeadsetDuotone } from "../duotone";
import { HeadsetFill } from "../fill";
import { HeadsetLight } from "../light";
import { HeadsetRegular } from "../regular";
import { HeadsetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Headset = memo(function Headset(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadsetBold,
      duotone: HeadsetDuotone,
      fill: HeadsetFill,
      light: HeadsetLight,
      regular: HeadsetRegular,
      thin: HeadsetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
