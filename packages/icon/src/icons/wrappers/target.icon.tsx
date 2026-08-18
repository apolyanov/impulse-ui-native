import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TargetBoldIcon } from "../bold/target-bold.icon";
import { TargetDuotoneIcon } from "../duotone/target-duotone.icon";
import { TargetFillIcon } from "../fill/target-fill.icon";
import { TargetLightIcon } from "../light/target-light.icon";
import { TargetRegularIcon } from "../regular/target-regular.icon";
import { TargetThinIcon } from "../thin/target-thin.icon";

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
