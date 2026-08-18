import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ApertureBoldIcon } from "../bold/aperture-bold.icon";
import { ApertureDuotoneIcon } from "../duotone/aperture-duotone.icon";
import { ApertureFillIcon } from "../fill/aperture-fill.icon";
import { ApertureLightIcon } from "../light/aperture-light.icon";
import { ApertureRegularIcon } from "../regular/aperture-regular.icon";
import { ApertureThinIcon } from "../thin/aperture-thin.icon";

export const ApertureIcon = memo(function Aperture(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApertureBoldIcon,
      duotone: ApertureDuotoneIcon,
      fill: ApertureFillIcon,
      light: ApertureLightIcon,
      regular: ApertureRegularIcon,
      thin: ApertureThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
