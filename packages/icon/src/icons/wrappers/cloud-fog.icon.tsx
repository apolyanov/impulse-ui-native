import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudFogBoldIcon } from "../bold/cloud-fog-bold.icon";
import { CloudFogDuotoneIcon } from "../duotone/cloud-fog-duotone.icon";
import { CloudFogFillIcon } from "../fill/cloud-fog-fill.icon";
import { CloudFogLightIcon } from "../light/cloud-fog-light.icon";
import { CloudFogRegularIcon } from "../regular/cloud-fog-regular.icon";
import { CloudFogThinIcon } from "../thin/cloud-fog-thin.icon";

export const CloudFogIcon = memo(function CloudFog(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudFogBoldIcon,
      duotone: CloudFogDuotoneIcon,
      fill: CloudFogFillIcon,
      light: CloudFogLightIcon,
      regular: CloudFogRegularIcon,
      thin: CloudFogThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
