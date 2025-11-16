import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignLeftBold } from "../bold";
import { AlignLeftDuotone } from "../duotone";
import { AlignLeftFill } from "../fill";
import { AlignLeftLight } from "../light";
import { AlignLeftRegular } from "../regular";
import { AlignLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignLeft = memo(function AlignLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignLeftBold,
      duotone: AlignLeftDuotone,
      fill: AlignLeftFill,
      light: AlignLeftLight,
      regular: AlignLeftRegular,
      thin: AlignLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
