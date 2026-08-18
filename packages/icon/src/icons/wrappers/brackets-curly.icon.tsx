import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BracketsCurlyBoldIcon } from "../bold/brackets-curly-bold.icon";
import { BracketsCurlyDuotoneIcon } from "../duotone/brackets-curly-duotone.icon";
import { BracketsCurlyFillIcon } from "../fill/brackets-curly-fill.icon";
import { BracketsCurlyLightIcon } from "../light/brackets-curly-light.icon";
import { BracketsCurlyRegularIcon } from "../regular/brackets-curly-regular.icon";
import { BracketsCurlyThinIcon } from "../thin/brackets-curly-thin.icon";

export const BracketsCurlyIcon = memo(function BracketsCurly(
  props: IconWrapperProps,
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
