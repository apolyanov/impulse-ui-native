import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlowerBoldIcon } from "../bold/flower-bold.icon";
import { FlowerDuotoneIcon } from "../duotone/flower-duotone.icon";
import { FlowerFillIcon } from "../fill/flower-fill.icon";
import { FlowerLightIcon } from "../light/flower-light.icon";
import { FlowerRegularIcon } from "../regular/flower-regular.icon";
import { FlowerThinIcon } from "../thin/flower-thin.icon";

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
