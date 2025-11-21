import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignCenterHorizontalBoldIcon } from "../bold";
import { AlignCenterHorizontalDuotoneIcon } from "../duotone";
import { AlignCenterHorizontalFillIcon } from "../fill";
import { AlignCenterHorizontalLightIcon } from "../light";
import { AlignCenterHorizontalRegularIcon } from "../regular";
import { AlignCenterHorizontalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignCenterHorizontalIcon = memo(function AlignCenterHorizontal(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignCenterHorizontalBoldIcon,
      duotone: AlignCenterHorizontalDuotoneIcon,
      fill: AlignCenterHorizontalFillIcon,
      light: AlignCenterHorizontalLightIcon,
      regular: AlignCenterHorizontalRegularIcon,
      thin: AlignCenterHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
