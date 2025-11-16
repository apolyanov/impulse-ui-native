import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlowerLotusBold } from "../bold";
import { FlowerLotusDuotone } from "../duotone";
import { FlowerLotusFill } from "../fill";
import { FlowerLotusLight } from "../light";
import { FlowerLotusRegular } from "../regular";
import { FlowerLotusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlowerLotus = memo(function FlowerLotus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlowerLotusBold,
      duotone: FlowerLotusDuotone,
      fill: FlowerLotusFill,
      light: FlowerLotusLight,
      regular: FlowerLotusRegular,
      thin: FlowerLotusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
