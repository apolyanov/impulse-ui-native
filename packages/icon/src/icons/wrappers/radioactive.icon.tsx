import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RadioactiveBoldIcon } from "../bold/radioactive-bold.icon";
import { RadioactiveDuotoneIcon } from "../duotone/radioactive-duotone.icon";
import { RadioactiveFillIcon } from "../fill/radioactive-fill.icon";
import { RadioactiveLightIcon } from "../light/radioactive-light.icon";
import { RadioactiveRegularIcon } from "../regular/radioactive-regular.icon";
import { RadioactiveThinIcon } from "../thin/radioactive-thin.icon";

export const RadioactiveIcon = memo(function Radioactive(
  props: IconWrapperProps,
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
