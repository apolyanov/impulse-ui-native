import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TelevisionBoldIcon } from "../bold/television-bold.icon";
import { TelevisionDuotoneIcon } from "../duotone/television-duotone.icon";
import { TelevisionFillIcon } from "../fill/television-fill.icon";
import { TelevisionLightIcon } from "../light/television-light.icon";
import { TelevisionRegularIcon } from "../regular/television-regular.icon";
import { TelevisionThinIcon } from "../thin/television-thin.icon";

export const TelevisionIcon = memo(function Television(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TelevisionBoldIcon,
      duotone: TelevisionDuotoneIcon,
      fill: TelevisionFillIcon,
      light: TelevisionLightIcon,
      regular: TelevisionRegularIcon,
      thin: TelevisionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
