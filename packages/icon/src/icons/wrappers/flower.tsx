import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlowerBold } from "../bold";
import { FlowerDuotone } from "../duotone";
import { FlowerFill } from "../fill";
import { FlowerLight } from "../light";
import { FlowerRegular } from "../regular";
import { FlowerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Flower = memo(function Flower(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowerBold,
      duotone: FlowerDuotone,
      fill: FlowerFill,
      light: FlowerLight,
      regular: FlowerRegular,
      thin: FlowerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
