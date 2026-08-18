import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudLightningBoldIcon } from "../bold/cloud-lightning-bold.icon";
import { CloudLightningDuotoneIcon } from "../duotone/cloud-lightning-duotone.icon";
import { CloudLightningFillIcon } from "../fill/cloud-lightning-fill.icon";
import { CloudLightningLightIcon } from "../light/cloud-lightning-light.icon";
import { CloudLightningRegularIcon } from "../regular/cloud-lightning-regular.icon";
import { CloudLightningThinIcon } from "../thin/cloud-lightning-thin.icon";

export const CloudLightningIcon = memo(function CloudLightning(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudLightningBoldIcon,
      duotone: CloudLightningDuotoneIcon,
      fill: CloudLightningFillIcon,
      light: CloudLightningLightIcon,
      regular: CloudLightningRegularIcon,
      thin: CloudLightningThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
