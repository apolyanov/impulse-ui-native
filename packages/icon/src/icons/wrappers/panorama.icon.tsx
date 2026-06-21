import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PanoramaBoldIcon } from "../bold";
import { PanoramaDuotoneIcon } from "../duotone";
import { PanoramaFillIcon } from "../fill";
import { PanoramaLightIcon } from "../light";
import { PanoramaRegularIcon } from "../regular";
import { PanoramaThinIcon } from "../thin";

export const PanoramaIcon = memo(function Panorama(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PanoramaBoldIcon,
      duotone: PanoramaDuotoneIcon,
      fill: PanoramaFillIcon,
      light: PanoramaLightIcon,
      regular: PanoramaRegularIcon,
      thin: PanoramaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
