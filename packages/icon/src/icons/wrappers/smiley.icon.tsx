import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyBoldIcon } from "../bold";
import { SmileyDuotoneIcon } from "../duotone";
import { SmileyFillIcon } from "../fill";
import { SmileyLightIcon } from "../light";
import { SmileyRegularIcon } from "../regular";
import { SmileyThinIcon } from "../thin";

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
