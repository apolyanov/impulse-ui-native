import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PanoramaBold } from "../bold";
import { PanoramaDuotone } from "../duotone";
import { PanoramaFill } from "../fill";
import { PanoramaLight } from "../light";
import { PanoramaRegular } from "../regular";
import { PanoramaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Panorama = memo(function Panorama(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PanoramaBold,
      duotone: PanoramaDuotone,
      fill: PanoramaFill,
      light: PanoramaLight,
      regular: PanoramaRegular,
      thin: PanoramaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
