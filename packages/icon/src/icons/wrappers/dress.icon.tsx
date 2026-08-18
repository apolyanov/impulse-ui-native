import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DressBoldIcon } from "../bold/dress-bold.icon";
import { DressDuotoneIcon } from "../duotone/dress-duotone.icon";
import { DressFillIcon } from "../fill/dress-fill.icon";
import { DressLightIcon } from "../light/dress-light.icon";
import { DressRegularIcon } from "../regular/dress-regular.icon";
import { DressThinIcon } from "../thin/dress-thin.icon";

export const DressIcon = memo(function Dress(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DressBoldIcon,
      duotone: DressDuotoneIcon,
      fill: DressFillIcon,
      light: DressLightIcon,
      regular: DressRegularIcon,
      thin: DressThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
