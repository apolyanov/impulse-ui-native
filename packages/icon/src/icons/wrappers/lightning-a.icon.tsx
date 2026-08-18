import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LightningABoldIcon } from "../bold/lightning-a-bold.icon";
import { LightningADuotoneIcon } from "../duotone/lightning-a-duotone.icon";
import { LightningAFillIcon } from "../fill/lightning-a-fill.icon";
import { LightningALightIcon } from "../light/lightning-a-light.icon";
import { LightningARegularIcon } from "../regular/lightning-a-regular.icon";
import { LightningAThinIcon } from "../thin/lightning-a-thin.icon";

export const LightningAIcon = memo(function LightningA(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightningABoldIcon,
      duotone: LightningADuotoneIcon,
      fill: LightningAFillIcon,
      light: LightningALightIcon,
      regular: LightningARegularIcon,
      thin: LightningAThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
