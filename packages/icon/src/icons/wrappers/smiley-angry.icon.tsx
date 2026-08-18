import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyAngryBoldIcon } from "../bold/smiley-angry-bold.icon";
import { SmileyAngryDuotoneIcon } from "../duotone/smiley-angry-duotone.icon";
import { SmileyAngryFillIcon } from "../fill/smiley-angry-fill.icon";
import { SmileyAngryLightIcon } from "../light/smiley-angry-light.icon";
import { SmileyAngryRegularIcon } from "../regular/smiley-angry-regular.icon";
import { SmileyAngryThinIcon } from "../thin/smiley-angry-thin.icon";

export const SmileyAngryIcon = memo(function SmileyAngry(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyAngryBoldIcon,
      duotone: SmileyAngryDuotoneIcon,
      fill: SmileyAngryFillIcon,
      light: SmileyAngryLightIcon,
      regular: SmileyAngryRegularIcon,
      thin: SmileyAngryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
