import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BracketsSquareBoldIcon } from "../bold";
import { BracketsSquareDuotoneIcon } from "../duotone";
import { BracketsSquareFillIcon } from "../fill";
import { BracketsSquareLightIcon } from "../light";
import { BracketsSquareRegularIcon } from "../regular";
import { BracketsSquareThinIcon } from "../thin";

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
