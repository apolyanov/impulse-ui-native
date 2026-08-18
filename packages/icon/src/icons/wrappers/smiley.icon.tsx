import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyBoldIcon } from "../bold/smiley-bold.icon";
import { SmileyDuotoneIcon } from "../duotone/smiley-duotone.icon";
import { SmileyFillIcon } from "../fill/smiley-fill.icon";
import { SmileyLightIcon } from "../light/smiley-light.icon";
import { SmileyRegularIcon } from "../regular/smiley-regular.icon";
import { SmileyThinIcon } from "../thin/smiley-thin.icon";

export const SmileyIcon = memo(function Smiley(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyBoldIcon,
      duotone: SmileyDuotoneIcon,
      fill: SmileyFillIcon,
      light: SmileyLightIcon,
      regular: SmileyRegularIcon,
      thin: SmileyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
