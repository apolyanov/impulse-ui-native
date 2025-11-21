import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OrangeSliceBoldIcon } from "../bold";
import { OrangeSliceDuotoneIcon } from "../duotone";
import { OrangeSliceFillIcon } from "../fill";
import { OrangeSliceLightIcon } from "../light";
import { OrangeSliceRegularIcon } from "../regular";
import { OrangeSliceThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const OrangeSliceIcon = memo(function OrangeSlice(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OrangeSliceBoldIcon,
      duotone: OrangeSliceDuotoneIcon,
      fill: OrangeSliceFillIcon,
      light: OrangeSliceLightIcon,
      regular: OrangeSliceRegularIcon,
      thin: OrangeSliceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
