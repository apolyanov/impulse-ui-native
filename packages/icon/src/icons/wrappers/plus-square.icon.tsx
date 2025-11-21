import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlusSquareBoldIcon } from "../bold";
import { PlusSquareDuotoneIcon } from "../duotone";
import { PlusSquareFillIcon } from "../fill";
import { PlusSquareLightIcon } from "../light";
import { PlusSquareRegularIcon } from "../regular";
import { PlusSquareThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlusSquareIcon = memo(function PlusSquare(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlusSquareBoldIcon,
      duotone: PlusSquareDuotoneIcon,
      fill: PlusSquareFillIcon,
      light: PlusSquareLightIcon,
      regular: PlusSquareRegularIcon,
      thin: PlusSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
