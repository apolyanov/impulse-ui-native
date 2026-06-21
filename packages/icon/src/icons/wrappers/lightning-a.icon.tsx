import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LightningABoldIcon } from "../bold";
import { LightningADuotoneIcon } from "../duotone";
import { LightningAFillIcon } from "../fill";
import { LightningALightIcon } from "../light";
import { LightningARegularIcon } from "../regular";
import { LightningAThinIcon } from "../thin";

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
