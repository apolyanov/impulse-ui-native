import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OrangeSliceBold } from "../bold";
import { OrangeSliceDuotone } from "../duotone";
import { OrangeSliceFill } from "../fill";
import { OrangeSliceLight } from "../light";
import { OrangeSliceRegular } from "../regular";
import { OrangeSliceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const OrangeSlice = memo(function OrangeSlice(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OrangeSliceBold,
      duotone: OrangeSliceDuotone,
      fill: OrangeSliceFill,
      light: OrangeSliceLight,
      regular: OrangeSliceRegular,
      thin: OrangeSliceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
