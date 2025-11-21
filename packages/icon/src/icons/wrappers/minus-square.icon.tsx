import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MinusSquareBoldIcon } from "../bold";
import { MinusSquareDuotoneIcon } from "../duotone";
import { MinusSquareFillIcon } from "../fill";
import { MinusSquareLightIcon } from "../light";
import { MinusSquareRegularIcon } from "../regular";
import { MinusSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MinusSquareIcon = memo(function MinusSquare(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusSquareBoldIcon,
      duotone: MinusSquareDuotoneIcon,
      fill: MinusSquareFillIcon,
      light: MinusSquareLightIcon,
      regular: MinusSquareRegularIcon,
      thin: MinusSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
