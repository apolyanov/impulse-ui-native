import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FourKBoldIcon } from "../bold";
import { FourKDuotoneIcon } from "../duotone";
import { FourKFillIcon } from "../fill";
import { FourKLightIcon } from "../light";
import { FourKRegularIcon } from "../regular";
import { FourKThinIcon } from "../thin";

export const FourKIcon = memo(function FourK(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FourKBoldIcon,
      duotone: FourKDuotoneIcon,
      fill: FourKFillIcon,
      light: FourKLightIcon,
      regular: FourKRegularIcon,
      thin: FourKThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
