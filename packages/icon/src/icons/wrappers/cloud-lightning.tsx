import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudLightningBold } from "../bold";
import { CloudLightningDuotone } from "../duotone";
import { CloudLightningFill } from "../fill";
import { CloudLightningLight } from "../light";
import { CloudLightningRegular } from "../regular";
import { CloudLightningThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudLightning = memo(function CloudLightning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudLightningBold,
      duotone: CloudLightningDuotone,
      fill: CloudLightningFill,
      light: CloudLightningLight,
      regular: CloudLightningRegular,
      thin: CloudLightningThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
