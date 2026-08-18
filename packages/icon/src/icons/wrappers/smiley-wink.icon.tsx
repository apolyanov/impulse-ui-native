import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyWinkBoldIcon } from "../bold/smiley-wink-bold.icon";
import { SmileyWinkDuotoneIcon } from "../duotone/smiley-wink-duotone.icon";
import { SmileyWinkFillIcon } from "../fill/smiley-wink-fill.icon";
import { SmileyWinkLightIcon } from "../light/smiley-wink-light.icon";
import { SmileyWinkRegularIcon } from "../regular/smiley-wink-regular.icon";
import { SmileyWinkThinIcon } from "../thin/smiley-wink-thin.icon";

export const SmileyWinkIcon = memo(function SmileyWink(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyWinkBoldIcon,
      duotone: SmileyWinkDuotoneIcon,
      fill: SmileyWinkFillIcon,
      light: SmileyWinkLightIcon,
      regular: SmileyWinkRegularIcon,
      thin: SmileyWinkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
