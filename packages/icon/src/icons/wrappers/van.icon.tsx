import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VanBoldIcon } from "../bold/van-bold.icon";
import { VanDuotoneIcon } from "../duotone/van-duotone.icon";
import { VanFillIcon } from "../fill/van-fill.icon";
import { VanLightIcon } from "../light/van-light.icon";
import { VanRegularIcon } from "../regular/van-regular.icon";
import { VanThinIcon } from "../thin/van-thin.icon";

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
