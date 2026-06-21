import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignLeftBoldIcon } from "../bold";
import { AlignLeftDuotoneIcon } from "../duotone";
import { AlignLeftFillIcon } from "../fill";
import { AlignLeftLightIcon } from "../light";
import { AlignLeftRegularIcon } from "../regular";
import { AlignLeftThinIcon } from "../thin";

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
