import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignLeftBoldIcon } from "../bold/align-left-bold.icon";
import { AlignLeftDuotoneIcon } from "../duotone/align-left-duotone.icon";
import { AlignLeftFillIcon } from "../fill/align-left-fill.icon";
import { AlignLeftLightIcon } from "../light/align-left-light.icon";
import { AlignLeftRegularIcon } from "../regular/align-left-regular.icon";
import { AlignLeftThinIcon } from "../thin/align-left-thin.icon";

export const AlignLeftIcon = memo(function AlignLeft(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignLeftBoldIcon,
      duotone: AlignLeftDuotoneIcon,
      fill: AlignLeftFillIcon,
      light: AlignLeftLightIcon,
      regular: AlignLeftRegularIcon,
      thin: AlignLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
