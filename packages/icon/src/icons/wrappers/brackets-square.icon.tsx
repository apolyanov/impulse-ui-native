import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BracketsSquareBoldIcon } from "../bold/brackets-square-bold.icon";
import { BracketsSquareDuotoneIcon } from "../duotone/brackets-square-duotone.icon";
import { BracketsSquareFillIcon } from "../fill/brackets-square-fill.icon";
import { BracketsSquareLightIcon } from "../light/brackets-square-light.icon";
import { BracketsSquareRegularIcon } from "../regular/brackets-square-regular.icon";
import { BracketsSquareThinIcon } from "../thin/brackets-square-thin.icon";

export const BracketsSquareIcon = memo(function BracketsSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsSquareBoldIcon,
      duotone: BracketsSquareDuotoneIcon,
      fill: BracketsSquareFillIcon,
      light: BracketsSquareLightIcon,
      regular: BracketsSquareRegularIcon,
      thin: BracketsSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
