import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FanBoldIcon } from "../bold/fan-bold.icon";
import { FanDuotoneIcon } from "../duotone/fan-duotone.icon";
import { FanFillIcon } from "../fill/fan-fill.icon";
import { FanLightIcon } from "../light/fan-light.icon";
import { FanRegularIcon } from "../regular/fan-regular.icon";
import { FanThinIcon } from "../thin/fan-thin.icon";

export const FanIcon = memo(function Fan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FanBoldIcon,
      duotone: FanDuotoneIcon,
      fill: FanFillIcon,
      light: FanLightIcon,
      regular: FanRegularIcon,
      thin: FanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
