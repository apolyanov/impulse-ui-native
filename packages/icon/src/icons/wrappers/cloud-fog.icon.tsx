import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudFogBoldIcon } from "../bold";
import { CloudFogDuotoneIcon } from "../duotone";
import { CloudFogFillIcon } from "../fill";
import { CloudFogLightIcon } from "../light";
import { CloudFogRegularIcon } from "../regular";
import { CloudFogThinIcon } from "../thin";

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
