import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DressBoldIcon } from "../bold";
import { DressDuotoneIcon } from "../duotone";
import { DressFillIcon } from "../fill";
import { DressLightIcon } from "../light";
import { DressRegularIcon } from "../regular";
import { DressThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
