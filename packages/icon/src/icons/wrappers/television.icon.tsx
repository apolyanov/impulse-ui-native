import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TelevisionBoldIcon } from "../bold";
import { TelevisionDuotoneIcon } from "../duotone";
import { TelevisionFillIcon } from "../fill";
import { TelevisionLightIcon } from "../light";
import { TelevisionRegularIcon } from "../regular";
import { TelevisionThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TelevisionIcon = memo(function Television(
  props: IconWrapperProps
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
