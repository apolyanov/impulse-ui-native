import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TractorBoldIcon } from "../bold";
import { TractorDuotoneIcon } from "../duotone";
import { TractorFillIcon } from "../fill";
import { TractorLightIcon } from "../light";
import { TractorRegularIcon } from "../regular";
import { TractorThinIcon } from "../thin";

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
