import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BrandyBoldIcon } from "../bold";
import { BrandyDuotoneIcon } from "../duotone";
import { BrandyFillIcon } from "../fill";
import { BrandyLightIcon } from "../light";
import { BrandyRegularIcon } from "../regular";
import { BrandyThinIcon } from "../thin";

export const BrandyIcon = memo(function Brandy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BrandyBoldIcon,
      duotone: BrandyDuotoneIcon,
      fill: BrandyFillIcon,
      light: BrandyLightIcon,
      regular: BrandyRegularIcon,
      thin: BrandyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
