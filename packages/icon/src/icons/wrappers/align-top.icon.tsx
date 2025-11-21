import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignTopBoldIcon } from "../bold";
import { AlignTopDuotoneIcon } from "../duotone";
import { AlignTopFillIcon } from "../fill";
import { AlignTopLightIcon } from "../light";
import { AlignTopRegularIcon } from "../regular";
import { AlignTopThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignTopIcon = memo(function AlignTop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignTopBoldIcon,
      duotone: AlignTopDuotoneIcon,
      fill: AlignTopFillIcon,
      light: AlignTopLightIcon,
      regular: AlignTopRegularIcon,
      thin: AlignTopThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
