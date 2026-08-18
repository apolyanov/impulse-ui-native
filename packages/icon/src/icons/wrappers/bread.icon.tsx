import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BreadBoldIcon } from "../bold/bread-bold.icon";
import { BreadDuotoneIcon } from "../duotone/bread-duotone.icon";
import { BreadFillIcon } from "../fill/bread-fill.icon";
import { BreadLightIcon } from "../light/bread-light.icon";
import { BreadRegularIcon } from "../regular/bread-regular.icon";
import { BreadThinIcon } from "../thin/bread-thin.icon";

export const BreadIcon = memo(function Bread(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BreadBoldIcon,
      duotone: BreadDuotoneIcon,
      fill: BreadFillIcon,
      light: BreadLightIcon,
      regular: BreadRegularIcon,
      thin: BreadThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
