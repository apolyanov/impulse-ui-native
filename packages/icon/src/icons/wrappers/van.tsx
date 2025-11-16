import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VanBold } from "../bold";
import { VanDuotone } from "../duotone";
import { VanFill } from "../fill";
import { VanLight } from "../light";
import { VanRegular } from "../regular";
import { VanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Van = memo(function Van(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VanBold,
      duotone: VanDuotone,
      fill: VanFill,
      light: VanLight,
      regular: VanRegular,
      thin: VanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
