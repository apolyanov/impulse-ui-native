import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightningBoldIcon } from "../bold";
import { LightningDuotoneIcon } from "../duotone";
import { LightningFillIcon } from "../fill";
import { LightningLightIcon } from "../light";
import { LightningRegularIcon } from "../regular";
import { LightningThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LightningIcon = memo(function Lightning(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightningBoldIcon,
      duotone: LightningDuotoneIcon,
      fill: LightningFillIcon,
      light: LightningLightIcon,
      regular: LightningRegularIcon,
      thin: LightningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
