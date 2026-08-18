import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChalkboardSimpleBoldIcon } from "../bold/chalkboard-simple-bold.icon";
import { ChalkboardSimpleDuotoneIcon } from "../duotone/chalkboard-simple-duotone.icon";
import { ChalkboardSimpleFillIcon } from "../fill/chalkboard-simple-fill.icon";
import { ChalkboardSimpleLightIcon } from "../light/chalkboard-simple-light.icon";
import { ChalkboardSimpleRegularIcon } from "../regular/chalkboard-simple-regular.icon";
import { ChalkboardSimpleThinIcon } from "../thin/chalkboard-simple-thin.icon";

export const ChalkboardSimpleIcon = memo(function ChalkboardSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChalkboardSimpleBoldIcon,
      duotone: ChalkboardSimpleDuotoneIcon,
      fill: ChalkboardSimpleFillIcon,
      light: ChalkboardSimpleLightIcon,
      regular: ChalkboardSimpleRegularIcon,
      thin: ChalkboardSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
