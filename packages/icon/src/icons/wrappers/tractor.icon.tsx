import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TractorBoldIcon } from "../bold/tractor-bold.icon";
import { TractorDuotoneIcon } from "../duotone/tractor-duotone.icon";
import { TractorFillIcon } from "../fill/tractor-fill.icon";
import { TractorLightIcon } from "../light/tractor-light.icon";
import { TractorRegularIcon } from "../regular/tractor-regular.icon";
import { TractorThinIcon } from "../thin/tractor-thin.icon";

export const TractorIcon = memo(function Tractor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TractorBoldIcon,
      duotone: TractorDuotoneIcon,
      fill: TractorFillIcon,
      light: TractorLightIcon,
      regular: TractorRegularIcon,
      thin: TractorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
