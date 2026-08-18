import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SmileyMehBoldIcon } from "../bold/smiley-meh-bold.icon";
import { SmileyMehDuotoneIcon } from "../duotone/smiley-meh-duotone.icon";
import { SmileyMehFillIcon } from "../fill/smiley-meh-fill.icon";
import { SmileyMehLightIcon } from "../light/smiley-meh-light.icon";
import { SmileyMehRegularIcon } from "../regular/smiley-meh-regular.icon";
import { SmileyMehThinIcon } from "../thin/smiley-meh-thin.icon";

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
