import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyBlankBoldIcon } from "../bold/smiley-blank-bold.icon";
import { SmileyBlankDuotoneIcon } from "../duotone/smiley-blank-duotone.icon";
import { SmileyBlankFillIcon } from "../fill/smiley-blank-fill.icon";
import { SmileyBlankLightIcon } from "../light/smiley-blank-light.icon";
import { SmileyBlankRegularIcon } from "../regular/smiley-blank-regular.icon";
import { SmileyBlankThinIcon } from "../thin/smiley-blank-thin.icon";

export const SmileyBlankIcon = memo(function SmileyBlank(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyBlankBoldIcon,
      duotone: SmileyBlankDuotoneIcon,
      fill: SmileyBlankFillIcon,
      light: SmileyBlankLightIcon,
      regular: SmileyBlankRegularIcon,
      thin: SmileyBlankThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
