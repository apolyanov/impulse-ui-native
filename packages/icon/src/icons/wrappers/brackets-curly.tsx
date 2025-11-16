import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BracketsCurlyBold } from "../bold";
import { BracketsCurlyDuotone } from "../duotone";
import { BracketsCurlyFill } from "../fill";
import { BracketsCurlyLight } from "../light";
import { BracketsCurlyRegular } from "../regular";
import { BracketsCurlyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BracketsCurly = memo(function BracketsCurly(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsCurlyBold,
      duotone: BracketsCurlyDuotone,
      fill: BracketsCurlyFill,
      light: BracketsCurlyLight,
      regular: BracketsCurlyRegular,
      thin: BracketsCurlyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
