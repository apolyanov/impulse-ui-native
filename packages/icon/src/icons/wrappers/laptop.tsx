import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LaptopBold } from "../bold";
import { LaptopDuotone } from "../duotone";
import { LaptopFill } from "../fill";
import { LaptopLight } from "../light";
import { LaptopRegular } from "../regular";
import { LaptopThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Laptop = memo(function Laptop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LaptopBold,
      duotone: LaptopDuotone,
      fill: LaptopFill,
      light: LaptopLight,
      regular: LaptopRegular,
      thin: LaptopThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
