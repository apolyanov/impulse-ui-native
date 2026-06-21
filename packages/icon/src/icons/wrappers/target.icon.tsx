import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TargetBoldIcon } from "../bold";
import { TargetDuotoneIcon } from "../duotone";
import { TargetFillIcon } from "../fill";
import { TargetLightIcon } from "../light";
import { TargetRegularIcon } from "../regular";
import { TargetThinIcon } from "../thin";

export const TargetIcon = memo(function Target(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TargetBoldIcon,
      duotone: TargetDuotoneIcon,
      fill: TargetFillIcon,
      light: TargetLightIcon,
      regular: TargetRegularIcon,
      thin: TargetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
