import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LightningBoldIcon } from "../bold/lightning-bold.icon";
import { LightningDuotoneIcon } from "../duotone/lightning-duotone.icon";
import { LightningFillIcon } from "../fill/lightning-fill.icon";
import { LightningLightIcon } from "../light/lightning-light.icon";
import { LightningRegularIcon } from "../regular/lightning-regular.icon";
import { LightningThinIcon } from "../thin/lightning-thin.icon";

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
