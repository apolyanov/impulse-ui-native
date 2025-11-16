import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyMehBold } from "../bold";
import { SmileyMehDuotone } from "../duotone";
import { SmileyMehFill } from "../fill";
import { SmileyMehLight } from "../light";
import { SmileyMehRegular } from "../regular";
import { SmileyMehThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SmileyMeh = memo(function SmileyMeh(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyMehBold,
      duotone: SmileyMehDuotone,
      fill: SmileyMehFill,
      light: SmileyMehLight,
      regular: SmileyMehRegular,
      thin: SmileyMehThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
