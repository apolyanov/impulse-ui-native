import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TelevisionSimpleBoldIcon } from "../bold/television-simple-bold.icon";
import { TelevisionSimpleDuotoneIcon } from "../duotone/television-simple-duotone.icon";
import { TelevisionSimpleFillIcon } from "../fill/television-simple-fill.icon";
import { TelevisionSimpleLightIcon } from "../light/television-simple-light.icon";
import { TelevisionSimpleRegularIcon } from "../regular/television-simple-regular.icon";
import { TelevisionSimpleThinIcon } from "../thin/television-simple-thin.icon";

export const TelevisionSimpleIcon = memo(function TelevisionSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TelevisionSimpleBoldIcon,
      duotone: TelevisionSimpleDuotoneIcon,
      fill: TelevisionSimpleFillIcon,
      light: TelevisionSimpleLightIcon,
      regular: TelevisionSimpleRegularIcon,
      thin: TelevisionSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
