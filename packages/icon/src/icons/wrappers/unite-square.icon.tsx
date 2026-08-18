import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UniteSquareBoldIcon } from "../bold/unite-square-bold.icon";
import { UniteSquareDuotoneIcon } from "../duotone/unite-square-duotone.icon";
import { UniteSquareFillIcon } from "../fill/unite-square-fill.icon";
import { UniteSquareLightIcon } from "../light/unite-square-light.icon";
import { UniteSquareRegularIcon } from "../regular/unite-square-regular.icon";
import { UniteSquareThinIcon } from "../thin/unite-square-thin.icon";

export const UniteSquareIcon = memo(function UniteSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UniteSquareBoldIcon,
      duotone: UniteSquareDuotoneIcon,
      fill: UniteSquareFillIcon,
      light: UniteSquareLightIcon,
      regular: UniteSquareRegularIcon,
      thin: UniteSquareThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
