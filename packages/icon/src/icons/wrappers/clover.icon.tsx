import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloverBoldIcon } from "../bold";
import { CloverDuotoneIcon } from "../duotone";
import { CloverFillIcon } from "../fill";
import { CloverLightIcon } from "../light";
import { CloverRegularIcon } from "../regular";
import { CloverThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloverIcon = memo(function Clover(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloverBoldIcon,
      duotone: CloverDuotoneIcon,
      fill: CloverFillIcon,
      light: CloverLightIcon,
      regular: CloverRegularIcon,
      thin: CloverThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
