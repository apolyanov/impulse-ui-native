import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StampBoldIcon } from "../bold";
import { StampDuotoneIcon } from "../duotone";
import { StampFillIcon } from "../fill";
import { StampLightIcon } from "../light";
import { StampRegularIcon } from "../regular";
import { StampThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StampIcon = memo(function Stamp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StampBoldIcon,
      duotone: StampDuotoneIcon,
      fill: StampFillIcon,
      light: StampLightIcon,
      regular: StampRegularIcon,
      thin: StampThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
