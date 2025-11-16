import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignTopBold } from "../bold";
import { AlignTopDuotone } from "../duotone";
import { AlignTopFill } from "../fill";
import { AlignTopLight } from "../light";
import { AlignTopRegular } from "../regular";
import { AlignTopThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignTop = memo(function AlignTop(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignTopBold,
      duotone: AlignTopDuotone,
      fill: AlignTopFill,
      light: AlignTopLight,
      regular: AlignTopRegular,
      thin: AlignTopThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
