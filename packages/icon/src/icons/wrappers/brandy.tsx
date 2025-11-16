import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BrandyBold } from "../bold";
import { BrandyDuotone } from "../duotone";
import { BrandyFill } from "../fill";
import { BrandyLight } from "../light";
import { BrandyRegular } from "../regular";
import { BrandyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Brandy = memo(function Brandy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrandyBold,
      duotone: BrandyDuotone,
      fill: BrandyFill,
      light: BrandyLight,
      regular: BrandyRegular,
      thin: BrandyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
