import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlowerLotusBoldIcon } from "../bold";
import { FlowerLotusDuotoneIcon } from "../duotone";
import { FlowerLotusFillIcon } from "../fill";
import { FlowerLotusLightIcon } from "../light";
import { FlowerLotusRegularIcon } from "../regular";
import { FlowerLotusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlowerLotusIcon = memo(function FlowerLotus(
  props: IconWrapperProps
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
