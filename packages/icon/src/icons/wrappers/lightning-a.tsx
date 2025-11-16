import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightningABold } from "../bold";
import { LightningADuotone } from "../duotone";
import { LightningAFill } from "../fill";
import { LightningALight } from "../light";
import { LightningARegular } from "../regular";
import { LightningAThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LightningA = memo(function LightningA(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightningABold,
      duotone: LightningADuotone,
      fill: LightningAFill,
      light: LightningALight,
      regular: LightningARegular,
      thin: LightningAThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
