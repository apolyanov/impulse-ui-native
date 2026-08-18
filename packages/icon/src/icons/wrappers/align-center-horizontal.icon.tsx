import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignCenterHorizontalBoldIcon } from "../bold/align-center-horizontal-bold.icon";
import { AlignCenterHorizontalDuotoneIcon } from "../duotone/align-center-horizontal-duotone.icon";
import { AlignCenterHorizontalFillIcon } from "../fill/align-center-horizontal-fill.icon";
import { AlignCenterHorizontalLightIcon } from "../light/align-center-horizontal-light.icon";
import { AlignCenterHorizontalRegularIcon } from "../regular/align-center-horizontal-regular.icon";
import { AlignCenterHorizontalThinIcon } from "../thin/align-center-horizontal-thin.icon";

export const AlignCenterHorizontalIcon = memo(function AlignCenterHorizontal(
  props: IconWrapperProps,
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
