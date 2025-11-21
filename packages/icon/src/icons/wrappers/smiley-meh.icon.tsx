import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyMehBoldIcon } from "../bold";
import { SmileyMehDuotoneIcon } from "../duotone";
import { SmileyMehFillIcon } from "../fill";
import { SmileyMehLightIcon } from "../light";
import { SmileyMehRegularIcon } from "../regular";
import { SmileyMehThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyMehIcon = memo(function SmileyMeh(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyMehBoldIcon,
      duotone: SmileyMehDuotoneIcon,
      fill: SmileyMehFillIcon,
      light: SmileyMehLightIcon,
      regular: SmileyMehRegularIcon,
      thin: SmileyMehThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
