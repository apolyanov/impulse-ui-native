import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RewindBold } from "../bold";
import { RewindDuotone } from "../duotone";
import { RewindFill } from "../fill";
import { RewindLight } from "../light";
import { RewindRegular } from "../regular";
import { RewindThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rewind = memo(function Rewind(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RewindBold,
      duotone: RewindDuotone,
      fill: RewindFill,
      light: RewindLight,
      regular: RewindRegular,
      thin: RewindThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
