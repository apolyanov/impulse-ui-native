import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyMeltingBoldIcon } from "../bold/smiley-melting-bold.icon";
import { SmileyMeltingDuotoneIcon } from "../duotone/smiley-melting-duotone.icon";
import { SmileyMeltingFillIcon } from "../fill/smiley-melting-fill.icon";
import { SmileyMeltingLightIcon } from "../light/smiley-melting-light.icon";
import { SmileyMeltingRegularIcon } from "../regular/smiley-melting-regular.icon";
import { SmileyMeltingThinIcon } from "../thin/smiley-melting-thin.icon";

export const SmileyMeltingIcon = memo(function SmileyMelting(
  props: IconWrapperProps,
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
