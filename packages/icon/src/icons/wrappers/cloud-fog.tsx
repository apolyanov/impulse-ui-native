import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudFogBold } from "../bold";
import { CloudFogDuotone } from "../duotone";
import { CloudFogFill } from "../fill";
import { CloudFogLight } from "../light";
import { CloudFogRegular } from "../regular";
import { CloudFogThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudFog = memo(function CloudFog(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudFogBold,
      duotone: CloudFogDuotone,
      fill: CloudFogFill,
      light: CloudFogLight,
      regular: CloudFogRegular,
      thin: CloudFogThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
