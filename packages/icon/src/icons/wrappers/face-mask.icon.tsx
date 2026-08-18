import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FaceMaskBoldIcon } from "../bold/face-mask-bold.icon";
import { FaceMaskDuotoneIcon } from "../duotone/face-mask-duotone.icon";
import { FaceMaskFillIcon } from "../fill/face-mask-fill.icon";
import { FaceMaskLightIcon } from "../light/face-mask-light.icon";
import { FaceMaskRegularIcon } from "../regular/face-mask-regular.icon";
import { FaceMaskThinIcon } from "../thin/face-mask-thin.icon";

export const FaceMaskIcon = memo(function FaceMask(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FaceMaskBoldIcon,
      duotone: FaceMaskDuotoneIcon,
      fill: FaceMaskFillIcon,
      light: FaceMaskLightIcon,
      regular: FaceMaskRegularIcon,
      thin: FaceMaskThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
