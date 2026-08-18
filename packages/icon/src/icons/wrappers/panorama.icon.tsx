import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PanoramaBoldIcon } from "../bold/panorama-bold.icon";
import { PanoramaDuotoneIcon } from "../duotone/panorama-duotone.icon";
import { PanoramaFillIcon } from "../fill/panorama-fill.icon";
import { PanoramaLightIcon } from "../light/panorama-light.icon";
import { PanoramaRegularIcon } from "../regular/panorama-regular.icon";
import { PanoramaThinIcon } from "../thin/panorama-thin.icon";

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
