import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlowerLotusBoldIcon } from "../bold/flower-lotus-bold.icon";
import { FlowerLotusDuotoneIcon } from "../duotone/flower-lotus-duotone.icon";
import { FlowerLotusFillIcon } from "../fill/flower-lotus-fill.icon";
import { FlowerLotusLightIcon } from "../light/flower-lotus-light.icon";
import { FlowerLotusRegularIcon } from "../regular/flower-lotus-regular.icon";
import { FlowerLotusThinIcon } from "../thin/flower-lotus-thin.icon";

export const FlowerLotusIcon = memo(function FlowerLotus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowerLotusBoldIcon,
      duotone: FlowerLotusDuotoneIcon,
      fill: FlowerLotusFillIcon,
      light: FlowerLotusLightIcon,
      regular: FlowerLotusRegularIcon,
      thin: FlowerLotusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
