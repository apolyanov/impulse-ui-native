import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightningBold } from "../bold";
import { LightningDuotone } from "../duotone";
import { LightningFill } from "../fill";
import { LightningLight } from "../light";
import { LightningRegular } from "../regular";
import { LightningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lightning = memo(function Lightning(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightningBold,
      duotone: LightningDuotone,
      fill: LightningFill,
      light: LightningLight,
      regular: LightningRegular,
      thin: LightningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
