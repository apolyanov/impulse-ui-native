import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyMeltingBoldIcon } from "../bold";
import { SmileyMeltingDuotoneIcon } from "../duotone";
import { SmileyMeltingFillIcon } from "../fill";
import { SmileyMeltingLightIcon } from "../light";
import { SmileyMeltingRegularIcon } from "../regular";
import { SmileyMeltingThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyMeltingIcon = memo(function SmileyMelting(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyMeltingBoldIcon,
      duotone: SmileyMeltingDuotoneIcon,
      fill: SmileyMeltingFillIcon,
      light: SmileyMeltingLightIcon,
      regular: SmileyMeltingRegularIcon,
      thin: SmileyMeltingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
