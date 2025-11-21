import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberNineBoldIcon } from "../bold";
import { NumberNineDuotoneIcon } from "../duotone";
import { NumberNineFillIcon } from "../fill";
import { NumberNineLightIcon } from "../light";
import { NumberNineRegularIcon } from "../regular";
import { NumberNineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberNineIcon = memo(function NumberNine(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberNineBoldIcon,
      duotone: NumberNineDuotoneIcon,
      fill: NumberNineFillIcon,
      light: NumberNineLightIcon,
      regular: NumberNineRegularIcon,
      thin: NumberNineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
