import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoxingGloveBoldIcon } from "../bold/boxing-glove-bold.icon";
import { BoxingGloveDuotoneIcon } from "../duotone/boxing-glove-duotone.icon";
import { BoxingGloveFillIcon } from "../fill/boxing-glove-fill.icon";
import { BoxingGloveLightIcon } from "../light/boxing-glove-light.icon";
import { BoxingGloveRegularIcon } from "../regular/boxing-glove-regular.icon";
import { BoxingGloveThinIcon } from "../thin/boxing-glove-thin.icon";

export const BoxingGloveIcon = memo(function BoxingGlove(
  props: IconWrapperProps,
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
