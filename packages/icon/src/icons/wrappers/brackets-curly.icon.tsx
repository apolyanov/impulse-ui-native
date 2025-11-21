import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BracketsCurlyBoldIcon } from "../bold";
import { BracketsCurlyDuotoneIcon } from "../duotone";
import { BracketsCurlyFillIcon } from "../fill";
import { BracketsCurlyLightIcon } from "../light";
import { BracketsCurlyRegularIcon } from "../regular";
import { BracketsCurlyThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BracketsCurlyIcon = memo(function BracketsCurly(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsCurlyBoldIcon,
      duotone: BracketsCurlyDuotoneIcon,
      fill: BracketsCurlyFillIcon,
      light: BracketsCurlyLightIcon,
      regular: BracketsCurlyRegularIcon,
      thin: BracketsCurlyThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
