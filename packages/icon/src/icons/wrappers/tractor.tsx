import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TractorBold } from "../bold";
import { TractorDuotone } from "../duotone";
import { TractorFill } from "../fill";
import { TractorLight } from "../light";
import { TractorRegular } from "../regular";
import { TractorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tractor = memo(function Tractor(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TractorBold,
      duotone: TractorDuotone,
      fill: TractorFill,
      light: TractorLight,
      regular: TractorRegular,
      thin: TractorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
