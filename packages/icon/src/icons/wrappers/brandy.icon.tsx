import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BrandyBoldIcon } from "../bold/brandy-bold.icon";
import { BrandyDuotoneIcon } from "../duotone/brandy-duotone.icon";
import { BrandyFillIcon } from "../fill/brandy-fill.icon";
import { BrandyLightIcon } from "../light/brandy-light.icon";
import { BrandyRegularIcon } from "../regular/brandy-regular.icon";
import { BrandyThinIcon } from "../thin/brandy-thin.icon";

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
