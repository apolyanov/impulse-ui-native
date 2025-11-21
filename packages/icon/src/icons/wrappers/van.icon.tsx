import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VanBoldIcon } from "../bold";
import { VanDuotoneIcon } from "../duotone";
import { VanFillIcon } from "../fill";
import { VanLightIcon } from "../light";
import { VanRegularIcon } from "../regular";
import { VanThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VanIcon = memo(function Van(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VanBoldIcon,
      duotone: VanDuotoneIcon,
      fill: VanFillIcon,
      light: VanLightIcon,
      regular: VanRegularIcon,
      thin: VanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
