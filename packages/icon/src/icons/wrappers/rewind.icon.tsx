import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RewindBoldIcon } from "../bold";
import { RewindDuotoneIcon } from "../duotone";
import { RewindFillIcon } from "../fill";
import { RewindLightIcon } from "../light";
import { RewindRegularIcon } from "../regular";
import { RewindThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RewindIcon = memo(function Rewind(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RewindBoldIcon,
      duotone: RewindDuotoneIcon,
      fill: RewindFillIcon,
      light: RewindLightIcon,
      regular: RewindRegularIcon,
      thin: RewindThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
