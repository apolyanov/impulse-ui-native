import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyBlankBoldIcon } from "../bold";
import { SmileyBlankDuotoneIcon } from "../duotone";
import { SmileyBlankFillIcon } from "../fill";
import { SmileyBlankLightIcon } from "../light";
import { SmileyBlankRegularIcon } from "../regular";
import { SmileyBlankThinIcon } from "../thin";

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
