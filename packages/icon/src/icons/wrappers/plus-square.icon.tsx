import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlusSquareBoldIcon } from "../bold/plus-square-bold.icon";
import { PlusSquareDuotoneIcon } from "../duotone/plus-square-duotone.icon";
import { PlusSquareFillIcon } from "../fill/plus-square-fill.icon";
import { PlusSquareLightIcon } from "../light/plus-square-light.icon";
import { PlusSquareRegularIcon } from "../regular/plus-square-regular.icon";
import { PlusSquareThinIcon } from "../thin/plus-square-thin.icon";

export const PlusSquareIcon = memo(function PlusSquare(
  props: IconWrapperProps,
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
