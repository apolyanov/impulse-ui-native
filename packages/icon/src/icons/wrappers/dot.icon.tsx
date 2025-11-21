import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotBoldIcon } from "../bold";
import { DotDuotoneIcon } from "../duotone";
import { DotFillIcon } from "../fill";
import { DotLightIcon } from "../light";
import { DotRegularIcon } from "../regular";
import { DotThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotIcon = memo(function Dot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotBoldIcon,
      duotone: DotDuotoneIcon,
      fill: DotFillIcon,
      light: DotLightIcon,
      regular: DotRegularIcon,
      thin: DotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
