import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyNervousBoldIcon } from "../bold/smiley-nervous-bold.icon";
import { SmileyNervousDuotoneIcon } from "../duotone/smiley-nervous-duotone.icon";
import { SmileyNervousFillIcon } from "../fill/smiley-nervous-fill.icon";
import { SmileyNervousLightIcon } from "../light/smiley-nervous-light.icon";
import { SmileyNervousRegularIcon } from "../regular/smiley-nervous-regular.icon";
import { SmileyNervousThinIcon } from "../thin/smiley-nervous-thin.icon";

export const SmileyNervousIcon = memo(function SmileyNervous(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyNervousBoldIcon,
      duotone: SmileyNervousDuotoneIcon,
      fill: SmileyNervousFillIcon,
      light: SmileyNervousLightIcon,
      regular: SmileyNervousRegularIcon,
      thin: SmileyNervousThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
