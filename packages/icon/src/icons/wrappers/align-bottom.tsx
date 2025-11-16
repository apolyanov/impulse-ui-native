import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignBottomBold } from "../bold";
import { AlignBottomDuotone } from "../duotone";
import { AlignBottomFill } from "../fill";
import { AlignBottomLight } from "../light";
import { AlignBottomRegular } from "../regular";
import { AlignBottomThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignBottom = memo(function AlignBottom(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignBottomBold,
      duotone: AlignBottomDuotone,
      fill: AlignBottomFill,
      light: AlignBottomLight,
      regular: AlignBottomRegular,
      thin: AlignBottomThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
