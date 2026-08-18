import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignTopBoldIcon } from "../bold/align-top-bold.icon";
import { AlignTopDuotoneIcon } from "../duotone/align-top-duotone.icon";
import { AlignTopFillIcon } from "../fill/align-top-fill.icon";
import { AlignTopLightIcon } from "../light/align-top-light.icon";
import { AlignTopRegularIcon } from "../regular/align-top-regular.icon";
import { AlignTopThinIcon } from "../thin/align-top-thin.icon";

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
