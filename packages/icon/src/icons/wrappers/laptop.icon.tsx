import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LaptopBoldIcon } from "../bold/laptop-bold.icon";
import { LaptopDuotoneIcon } from "../duotone/laptop-duotone.icon";
import { LaptopFillIcon } from "../fill/laptop-fill.icon";
import { LaptopLightIcon } from "../light/laptop-light.icon";
import { LaptopRegularIcon } from "../regular/laptop-regular.icon";
import { LaptopThinIcon } from "../thin/laptop-thin.icon";

export const LaptopIcon = memo(function Laptop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LaptopBoldIcon,
      duotone: LaptopDuotoneIcon,
      fill: LaptopFillIcon,
      light: LaptopLightIcon,
      regular: LaptopRegularIcon,
      thin: LaptopThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
