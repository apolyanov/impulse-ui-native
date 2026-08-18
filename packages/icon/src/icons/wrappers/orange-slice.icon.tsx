import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OrangeSliceBoldIcon } from "../bold/orange-slice-bold.icon";
import { OrangeSliceDuotoneIcon } from "../duotone/orange-slice-duotone.icon";
import { OrangeSliceFillIcon } from "../fill/orange-slice-fill.icon";
import { OrangeSliceLightIcon } from "../light/orange-slice-light.icon";
import { OrangeSliceRegularIcon } from "../regular/orange-slice-regular.icon";
import { OrangeSliceThinIcon } from "../thin/orange-slice-thin.icon";

export const OrangeSliceIcon = memo(function OrangeSlice(
  props: IconWrapperProps,
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
