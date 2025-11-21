import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RadioactiveBoldIcon } from "../bold";
import { RadioactiveDuotoneIcon } from "../duotone";
import { RadioactiveFillIcon } from "../fill";
import { RadioactiveLightIcon } from "../light";
import { RadioactiveRegularIcon } from "../regular";
import { RadioactiveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RadioactiveIcon = memo(function Radioactive(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RadioactiveBoldIcon,
      duotone: RadioactiveDuotoneIcon,
      fill: RadioactiveFillIcon,
      light: RadioactiveLightIcon,
      regular: RadioactiveRegularIcon,
      thin: RadioactiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
