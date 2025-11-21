import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlowerBoldIcon } from "../bold";
import { FlowerDuotoneIcon } from "../duotone";
import { FlowerFillIcon } from "../fill";
import { FlowerLightIcon } from "../light";
import { FlowerRegularIcon } from "../regular";
import { FlowerThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlowerIcon = memo(function Flower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowerBoldIcon,
      duotone: FlowerDuotoneIcon,
      fill: FlowerFillIcon,
      light: FlowerLightIcon,
      regular: FlowerRegularIcon,
      thin: FlowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
