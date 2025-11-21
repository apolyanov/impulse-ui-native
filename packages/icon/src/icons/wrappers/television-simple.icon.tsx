import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TelevisionSimpleBoldIcon } from "../bold";
import { TelevisionSimpleDuotoneIcon } from "../duotone";
import { TelevisionSimpleFillIcon } from "../fill";
import { TelevisionSimpleLightIcon } from "../light";
import { TelevisionSimpleRegularIcon } from "../regular";
import { TelevisionSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TelevisionSimpleIcon = memo(function TelevisionSimple(
  props: IconWrapperProps
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
