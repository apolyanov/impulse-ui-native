import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoxingGloveBoldIcon } from "../bold";
import { BoxingGloveDuotoneIcon } from "../duotone";
import { BoxingGloveFillIcon } from "../fill";
import { BoxingGloveLightIcon } from "../light";
import { BoxingGloveRegularIcon } from "../regular";
import { BoxingGloveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BoxingGloveIcon = memo(function BoxingGlove(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoxingGloveBoldIcon,
      duotone: BoxingGloveDuotoneIcon,
      fill: BoxingGloveFillIcon,
      light: BoxingGloveLightIcon,
      regular: BoxingGloveRegularIcon,
      thin: BoxingGloveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
