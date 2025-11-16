import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FanBold } from "../bold";
import { FanDuotone } from "../duotone";
import { FanFill } from "../fill";
import { FanLight } from "../light";
import { FanRegular } from "../regular";
import { FanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Fan = memo(function Fan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FanBold,
      duotone: FanDuotone,
      fill: FanFill,
      light: FanLight,
      regular: FanRegular,
      thin: FanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
