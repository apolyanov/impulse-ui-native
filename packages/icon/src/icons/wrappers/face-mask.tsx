import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FaceMaskBold } from "../bold";
import { FaceMaskDuotone } from "../duotone";
import { FaceMaskFill } from "../fill";
import { FaceMaskLight } from "../light";
import { FaceMaskRegular } from "../regular";
import { FaceMaskThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FaceMask = memo(function FaceMask(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FaceMaskBold,
      duotone: FaceMaskDuotone,
      fill: FaceMaskFill,
      light: FaceMaskLight,
      regular: FaceMaskRegular,
      thin: FaceMaskThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
